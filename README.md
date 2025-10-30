# 🧭 Productivity Dashboard — MERN Stack

A full-stack productivity management web app that allows users to **set goals, manage daily tasks, track progress, and visualize insights**, all within a secure and personalized dashboard.

---

## 🚀 Tech Stack

### 🧱 Frontend
- **React.js (Vite)** — modern UI framework  
- **Tailwind CSS + DaisyUI** — for elegant and responsive styling  
- **React Router DOM** — client-side routing  
- **JWT Auth Handling** — token-based route protection  

### ⚙️ Backend
- **Node.js + Express.js** — API and server logic  
- **MongoDB Atlas + Mongoose** — cloud-hosted database  
- **JWT Authentication** — secure user sessions  
- **Render** — for backend deployment  

---

## 🧩 Features

### 👤 User Management
- Signup & Login with JWT Authentication  
- Protected routes (`/`, `/profile`) accessible only to logged-in users  
- Profile section with user info fetched from backend
- - **Update Feature:** Users can edit and update their goals and task in profile section

### 🎯 Goals Management
- Add new personal goals  
- View all goals dynamically  
- Delete goals instantly from UI and database  

### ✅ Tasks Management
- Add daily or custom tasks  
- View all active tasks  
- Delete completed or unwanted tasks  

### 📊 Progress Insights
- View total number of goals and tasks  
- Visualize completion stats with progress bar  
- Future support for charts (Recharts.js)  

### 💻 Dashboard
- Central hub showing goals, tasks, progress insights, and quick stats  
- Responsive and mobile-friendly UI  
- Live data fetched securely with user’s JWT  

---

The production-ready integration would rely on:
- **Environment-aware configuration**,  
- **Secure JWT handling**,  
- **Reverse-proxy-based routing**,  
- **Observability and scaling tools**,  
to ensure smooth and scalable communication between frontend and backend as the user base grows.


## 🔑 Environment Variables

Create a `.env` file inside `backend/` with:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


