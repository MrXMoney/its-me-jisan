// firebase.js
import { initializeApp } from \"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js\";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from \"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js\";
import { getDatabase, ref, set, push } from \"https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js\";

const firebaseConfig = {
  apiKey: \"AIzaSyDy0QLtpLlzpAagSFtBW0J01jDmPTj3dns\",
  authDomain: \"rintiloveyou-6c20f.firebaseapp.com\",
  databaseURL: \"https://rintiloveyou-6c20f-default-rtdb.firebaseio.com\",
  projectId: \"rintiloveyou-6c20f\",
  storageBucket: \"rintiloveyou-6c20f.firebasestorage.app\",
  messagingSenderId: \"544938645122\",
  appId: \"1:544938645122:web:2697a58c2410e63e65c69b\",
  measurementId: \"G-5XWLSBBNLV\"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, ref, set, push };
