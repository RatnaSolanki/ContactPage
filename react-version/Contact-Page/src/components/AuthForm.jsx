import React, { useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../global.css";

export default function AuthForm({ mode = "login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); // ← React Router navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "signup") {
      setMsg("Creating account...");
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), { email });
        setMsg("Signup successful! Please login now.");
        setEmail("");
        setPassword("");
        setTimeout(() => navigate("/login"), 1200); // ← Redirect to login
      } catch (err) {
        setMsg(err.message);
      }
    } else {
      setMsg("Logging in...");
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setMsg("Login successful!");
        navigate("/contact"); // ← Redirect to contact page
      } catch (err) {
        setMsg(err.message);
      }
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="emoji">
          {mode === "signup" ? "🎉" : "🔑"}
        </div>
        <h2 className="auth-title">
          {mode === "signup" ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
          />
          <button type="submit" className="auth-btn">
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="auth-switch">
          {mode === "signup" ? (
            <>Already have an account?
              <span className="auth-link" onClick={() => navigate("/login")}> Login</span>
            </>
          ) : (
            <>Don’t have an account?
              <span className="auth-link" onClick={() => navigate("/signup")}> Sign Up</span>
            </>
          )}
        </div>

        {msg && <div className="auth-msg">{msg}</div>}
      </div>
    </div>
  );
}