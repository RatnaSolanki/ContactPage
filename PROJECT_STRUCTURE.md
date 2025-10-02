### Project Structure — Contact Page Project
This document explains the folder structure of the Contact Page project.  
The repository contains **two distinct versions** of the app.

## Root Directory

ContactPage/
├── vanilla-version/
├── react-version/
├── PROJECT_STRUCTURE.md
├── README.md

- `vanilla-version/` — Vanilla JavaScript version of the Contact Page app.  
- `react-version/` — React + Firebase version of the Contact Page app.  
- `PROJECT_STRUCTURE.md` — This file describing the project structure.  
- `README.md` — Overview of the project, features, and usage instructions.


## Vanilla JavaScript Version

vanilla-version/
├── index.html # Main HTML file
├── script.js # JavaScript logic for authentication & messages
├── firebase.js # Firebase configuration and initialization
├── styles.css # Styling for Vanilla JS version
└── assets/ # Static assets (images, icons, etc.)

**Description:**  
This version uses plain HTML, CSS, and JavaScript with Firebase for authentication and real-time Firestore database operations.  
No framework is used

## React + Firebase Version

react-version/
├── public/
│ ├── index.html # Root HTML
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── AuthForm.jsx # Authentication form (login/signup)
│ │ ├── ContactForm.jsx # Contact form and messages display
│ ├── firebase.js # Firebase configuration
│ ├── App.jsx # Main React App component
│ ├── main.jsx # Entry point for React app
│ ├── global.css # Styles for React version
│ └── assets/ # Static assets (images, icons, etc.)
├── package.json # React project dependencies
└── vite.config.js # Vite configuration

**Description:**  
This version uses React with Firebase for authentication and real-time Firestore database.  
It contains a clean component structure with styling handled in `global.css`.


Quick Commands

### Vanilla JS Version
cd vanilla-version
npx live-server


### React Version
cd react-version
npm install
npm run dev

