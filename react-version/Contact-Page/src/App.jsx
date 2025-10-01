import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase"; // ← Correct import
import { onAuthStateChanged } from "firebase/auth";
import AuthForm from "./components/AuthForm";
import ContactForm from "./components/ContactForm";
import "./global.css";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/contact" /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!user ? <AuthForm mode="login" /> : <Navigate to="/contact" />}
      />
      <Route
        path="/signup"
        element={!user ? <AuthForm mode="signup" /> : <Navigate to="/contact" />}
      />
      <Route
        path="/contact"
        element={user ? <ContactForm /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
