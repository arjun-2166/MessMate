# 🍽️ MessMate - Smart Hostel Mess Feedback System

MessMate is a full-stack web application designed to improve the hostel mess experience by enabling students to view daily menus and provide structured feedback. The system allows users to interact with meal options through likes, dislikes, and comments, while ensuring secure access using modern authentication techniques.

---

## 🚀 Key Features

### 📅 Dynamic Weekly Menu
- Displays day-wise (Monday–Sunday) mess menu
- Includes separate lunch and dinner sections
- Interactive UI for easy navigation

### 👍 Feedback & Analytics System
- Like/Dislike functionality for each meal
- Real-time percentage-based analytics
- Helps identify popular and unpopular meals

### 💬 User Feedback Module
- Students can submit textual feedback
- Feedback is dynamically displayed
- Enables continuous improvement of food quality

---

## 🔐 Authentication & Security

### 🔑 JWT-Based Authentication
- Secure login system using JSON Web Tokens
- Token-based session management

### 🔒 Password Hashing (bcrypt)
- User passwords are securely hashed before storage
- Prevents exposure of plain-text credentials

### 👑 Role-Based Access Control
- Admin-only protected routes
- Unauthorized users are restricted from sensitive operations

### ⚙️ Environment Variables
- Sensitive data (JWT secret) stored using `.env`
- Enhances security and configuration management

---

## 🛠️ Tech Stack

**Frontend:**
- HTML
- CSS
- JavaScript

**Backend:**
- Node.js
- Express.js

**Security:**
- JSON Web Token (JWT)
- bcrypt

---

## ⚡ Application Workflow

1. User registers with username, password, and role
2. Password is hashed using bcrypt
3. User logs in and receives a JWT token
4. Token is used to access protected routes
5. Users interact with menu and submit feedback
6. Backend processes and returns dynamic data

---

## 📂 Project Structure

MessMate/
│── index.html # Frontend UI
│── server.js # Backend logic
│── package.json # Dependencies
│── .gitignore # Ignore files
│── .env # Environment variables

## 📌 Future Improvements

- Integration with MongoDB for persistent storage
- User authentication UI (login/register pages)
- Admin dashboard for menu management
- Deployment with full backend support

---

## 👨‍💻 Author

**Arjun Modi**
