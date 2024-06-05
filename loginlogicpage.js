
import { getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import { auth } from "./firebase.mjs"


Createbtn.addEventListener("click",()=>{

    
    var Uemail = document.getElementById("email").value
    var Upassword = document.getElementById("pass").value
  


    signInWithEmailAndPassword(auth, Uemail, Upassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;


   
    console.log(user,"okay");
    window.location.href ="index.html"



    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorcode==========>",errorCode);
    console.log("errorMessage==========>",errorMessage);
    alert(errorCode,errorMessage)
    //  alert(errorMessage)
  });
    
  
})