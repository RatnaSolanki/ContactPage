import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("showLogin").onclick = function(e) {
  e.preventDefault();
  document.getElementById("signupSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
};
document.getElementById("showSignup").onclick = function(e) {
  e.preventDefault();
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("signupSection").style.display = "block";
};


// SIGNUP
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const msgEl = document.getElementById("signupMsg");
    msgEl.textContent = "Creating account...";
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), { email });
      msgEl.textContent = "Account created! Redirecting to login...";
      setTimeout(() => window.location.href = "login.html", 1300);
    } catch (err) {
      msgEl.textContent = err.message;
    }
  });
}

// LOGIN
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const msgEl = document.getElementById("loginMsg");
    msgEl.textContent = "Logging in...";
    try {
      await signInWithEmailAndPassword(auth, email, password);
      msgEl.textContent = "Login successful! Redirecting...";
      setTimeout(() => window.location.href = "contact.html", 1100);
    } catch (err) {
      msgEl.textContent = err.message;
    }
  });
}

// CONTACT
// function renderMessages(messages) {
//   const messagesList = document.getElementById("messagesList");
//   if (!messagesList) return;
//   if (messages.length === 0) {
//     messagesList.innerHTML = "<p>No messages sent yet.</p>";
//     return;
//   }
//   messagesList.innerHTML = "<h3>Your Messages:</h3><ul>" +
//     messages.map(msg =>
//       `<li>
//         <div style="padding:0.5em 0;">
//           <span>${msg.message}</span><br>
//           <small>${msg.timestamp ? new Date(msg.timestamp.seconds*1000).toLocaleString() : ""}</small>
//         </div>
//       </li>`
//     ).join("") +
//     "</ul>";
// }

// async function loadMessagesForUser(user) {
//   const q = query(
//     collection(db, "contacts"),
//     where("uid", "==", user.uid),
//     orderBy("timestamp", "desc")
//   );
//   const querySnapshot = await getDocs(q);
//   const messages = [];
//   querySnapshot.forEach(doc => {
//     messages.push(doc.data());
//   });
//   renderMessages(messages);
// }

// onAuthStateChanged(auth, (user) => {
//   if (!user) {
//     window.location.href = "login.html";
//     return;
//   }
//   // Load user's messages
//   loadMessagesForUser(user);
// });

// Handle sending a new message
if (document.getElementById("contactForm")) {
  document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const message = document.getElementById("contactMessage").value;
    const user = auth.currentUser;
    const msgEl = document.getElementById("contactMsg");
    msgEl.textContent = "Sending message...";
    if (user) {
      try {
        await addDoc(collection(db, "contacts"), {
          uid: user.uid,
          message: message,
          timestamp: new Date()
        });
        msgEl.textContent = "✅ Message sent!";
        document.getElementById("contactMessage").value = "";
        // Refresh the messages list
        loadMessagesForUser(user);
      } catch (err) {
        msgEl.textContent = err.message;
      }
    }
  });
}

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}
