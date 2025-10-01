import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  where
} from "firebase/firestore";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Check if user is authenticated before attempting to query
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "messages"),
      where("userId", "==", auth.currentUser.uid),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return () => unsubscribe();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // A check for auth.currentUser is good practice here as well
    if (!auth.currentUser) {
        console.error("User not logged in, cannot send message.");
        return;
    }

    try {
        await addDoc(collection(db, "messages"), {
          text: message,
          userId: auth.currentUser.uid,
          timestamp: serverTimestamp()
        });
        setMessage("");
    } catch (error) {
        console.error("Error sending message: ", error);
        // Optionally show an error to the user
    }
  };

  return (
    <> {/* Start of React Fragment to return multiple top-level elements */}
      {/* FULL-WIDTH NAVBAR */}
      <div className="navbar">
        <h2 className="nav-title">Contact Page</h2>
        <button className="logout-btn" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>

      {/* CENTERED CONTACT CARD */}
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSend}>
          <textarea
            className="contact-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
          />
          <button type="submit" className="send-btn">Send</button>
        </form>

        <div className="messages-list">
          <h3>Your Messages</h3>
          <ul className="messages-ul">
            {messages.length === 0 && (
              <div className="no-messages">No messages yet.</div>
            )}
            {messages.map(msg => (
              <li key={msg.id} className="message-item">
                <div className="message-header">
                  <strong>You</strong>
                  <small>
                    {msg.timestamp?.toDate
                      ? msg.timestamp.toDate().toLocaleString()
                      : "Sending..."}
                  </small>
                </div>
                <p className="message-text">{msg.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}