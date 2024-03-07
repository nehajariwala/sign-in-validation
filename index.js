const signup=(e)=>{
   e.preventDefault();

   let username=document.getElementById("username").value
   let password=document.getElementById("password").value


   var nameRegex = /^[a-zA-Z\-]+$/;
   if(nameRegex.test(username)==false){
    
         alert("please enter valid username");
   }
   else{
    alert("valid username");
   }




   var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   if(passwordRegex.test(password)==false){
    alert("please enter valid password");
   }
   else{
    alert("succesfully password ");
   }








}
document.querySelector("form").addEventListener("submit",signup)