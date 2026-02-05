# ☀️ Techno Solar Power

A full-stack MERN (MongoDB, Express, React, Node.js) web application designed for a modern solar power company. This project features a responsive frontend built with React and Tailwind CSS, integrated with a robust backend API for managing customer inquiries.

## 🚀 Features

-   **Responsive Design:** Fully responsive layout optimized for desktop, tablet, and mobile using **Tailwind CSS**.
-   **Client-Side Routing:** Seamless navigation between pages (Home, About, Services, Contact) powered by **React Router**.
-   **REST API:** Custom backend API to handle data requests.
-   **Database Integration:** **MongoDB** integration for storing contact form submissions and persistent data.
-   **Modern Tooling:** Built with **Vite** for lightning-fast development and build times.

## 🛠️ Tech Stack

### Frontend (Client)
-   **React** (v19) - Component-based UI library
-   **Vite** - Next Generation Frontend Tooling
-   **Tailwind CSS** (v4) - Utility-first CSS framework
-   **React Router DOM** - declarative routing
-   **Axios** - Promise-based HTTP client

### Backend (Server)
-   **Node.js** - JavaScript runtime environment
-   **Express.js** - Web application framework
-   **MongoDB & Mongoose** - NoSQL database and object modeling
-   **Dotenv** - Environment variable management
-   **CORS** - Cross-Origin Resource Sharing

## 📂 Project Structure

```bash
solar-website/
├── client/         # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── package.json
└── server/         # Backend Node/Express API
    ├── models/     # Mongoose database models
    ├── app.js      # Entry point for the server
    └── package.json
