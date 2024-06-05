

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import { auth } from "./firebase.mjs"


Createbtn.addEventListener("click",()=>{

    var fname = document.getElementById("firstName").value
    var lname = document.getElementById("lastName").value
    var Uemail = document.getElementById("email").value
    var Upassword = document.getElementById("pass").value
    var age = document.getElementById("age").value


    createUserWithEmailAndPassword(auth, Uemail, Upassword)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      window.location.href ="loginpage.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     console.log("errorcode==========>",errorCode);
     console.log("errorMessage==========>",errorMessage);
    alert(errorCode,errorMessage)
     
    });
  
})

