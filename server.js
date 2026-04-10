const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

// ---------------- DATABASE ----------------
let feedbacks = [];
let users = [];

// ---------------- BASIC ROUTES ----------------
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/feedback", (req, res) => {
  res.json(feedbacks);
});

app.post("/feedback", (req, res) => {
  feedbacks.unshift(req.body.text);
  res.json({ message: "Feedback saved" });
});

// ---------------- AUTH PART ----------------

// REGISTER
app.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  users.push({ username, password: hashed, role });

  res.send("User registered");
});

// LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Wrong password");

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
});

// MIDDLEWARE
function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.send("No token");

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch {
    res.send("Invalid token");
  }
}

// ADMIN ROUTE
app.get("/admin", auth, (req, res) => {
  if (req.user.role !== "admin") {
    return res.send("Access denied");
  }

  res.send("Welcome Admin");
});

// ---------------- START SERVER ----------------
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
