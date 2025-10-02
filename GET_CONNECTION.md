# GET_CONNECTION — Firebase Setup for Contact Page Project

This guide explains how to connect both the **Vanilla JS** and **React** versions of the Contact Page project to Firebase.

---

## 1️⃣ Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project**.
3. Enter a project name (e.g., `ContactPageProject`).
4. Accept the terms and click **Continue**.
5. Disable Google Analytics (optional).
6. Click **Create project**.

---

## 2️⃣ Enable Authentication
1. In Firebase Console, go to **Authentication → Sign-in method**.
2. Enable **Email/Password** authentication.
3. Save changes.

---

## 3️⃣ Create Firestore Database
1. In Firebase Console, go to **Firestore Database**.
2. Click **Create database**.
3. Select **Start in test mode** (for development).
4. Choose your location and click **Enable**.

---

## 4️⃣ Get Firebase Config
1. Go to **Project Settings** (⚙️ gear icon).
2. Scroll down to **Your apps**.
3. Click **Add app → Web**.
4. Register app name (e.g., `contact-page-app`).
5. Copy the generated **Firebase config object**:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

 ----

## 5️⃣ Add Config to Project

🔹 Vanilla JS Version
- Open vanilla-version/firebase.js
- Replace the config object with your own values.

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
}


🔹React Version
- Open react-version/src/firebase.js
- Replace the config object with your own values.

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

----

###6️⃣ Run the Project
- Vanilla JS Version

cd vanilla-version
npx live-server

- React Version
  
cd react-version
npm install
npm run dev

Now your project is connected to Firebase and ready to use!
