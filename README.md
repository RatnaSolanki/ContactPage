# ContactPage
This repository contains two versions of a **Contact Page Application** with authentication and messaging functionality.  
One version is built with **Vanilla JavaScript**, and the other with **React + Firebase**.

## Project Structure

ContactPage/
├── vanilla-version/ # Vanilla JavaScript version
│ ├── index.html
│ ├── script.js
│ ├── firebase.js
│ ├── global.css
│ └── ...
├── react-version/ # React + Firebase version
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── AuthForm.jsx
│ │ │ ├── ContactForm.jsx
│ │ ├── firebase.js
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── global.css
│ ├── package.json
│ └── ...
├── README.md


## Features
Both versions have:

- User authentication (signup & login) using Firebase.
- Contact form with:
  - Name input (React version)
  - Message input
- Messages stored in Firebase Firestore.
- Display of all previous messages sent by the user.
- Real-time updates.
- Logout functionality.
- Responsive design.



## Installation

### Vanilla JavaScript Version
1. Go to `vanilla-version` folder:
   cd vanilla-version
Open index.html in browser (no server required) or use a simple HTTP server:
npx live-server

### React Version
1. Go to react-version folder:
cd react-version

2. Install dependencies:
npm install

3. Setup Firebase:
- Create a project in Firebase Console.
- Enable Email/Password Authentication.
- Create a Firestore database.
- Replace Firebase config in firebase.js.

4. Run development server:
npm run dev


###Usage
** Vanilla JS Version
- Open the app in a browser.
- Sign up or log in.
- Send messages via the contact form.
- View your messages.

** React Version
- Start the dev server.
- Sign up or log in.
- Send messages via the contact form.
- View your messages in real-time.
- Logout using the button.


##Improvements
- Add profile picture for users.
- Enable message deletion & editing.
- Implement message timestamps in a better format.
- Add search functionality to messages.


###License
This project is open-source and available under the MIT License
