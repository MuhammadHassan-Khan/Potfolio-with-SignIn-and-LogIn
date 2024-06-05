  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA4jmJsQo0jxqC08CgPNeVDSQ408YcsrmU",
    authDomain: "for-practice-fire-base.firebaseapp.com",
    projectId: "for-practice-fire-base",
    storageBucket: "for-practice-fire-base.appspot.com",
    messagingSenderId: "30836595592",
    appId: "1:30836595592:web:8c3d4d0429fa98e396f83d"
  };

  // Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app);