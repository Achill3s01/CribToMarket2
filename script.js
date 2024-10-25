// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLA7cmjLEZ0eFiZ-UuCCFtziKWIDYDvr0",
  authDomain: "weather-app-cb6c0.firebaseapp.com",
  projectId: "weather-app-cb6c0",
  storageBucket: "weather-app-cb6c0.appspot.com",
  messagingSenderId: "157533767644",
  appId: "1:157533767644:web:1fdc77e856520650ec3119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
    event.preventDefault()
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     
        
     
     createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert("Accoount Created");
                window.location.href = "login.html";
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }
)