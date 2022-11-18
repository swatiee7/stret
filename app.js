 
 
 /* injecting header and footer dynamically */
$( function(){
   $("#header").load("header.html");                 
   $("#footer").load("footer.html");
 });
 



 /*code for login validation */

function myLogin (){                                     
    var em = document.getElementById("eml").value;
    var ps =  document.getElementById("psd").value;

    
     if(em === "admin@admin.com" && ps == 123456){
      alert("Login Successful");
      window.open("index.html");
     }

else{
   alert("Invalid email or password")
} 
 }  



 /*code for add to cart button */                                                   
  
function myFun(){                                 
   alert("Go to cart");
}
    


  /* Add to cart button changes to go to cart code in product page */


 function myImage(){
   const btn = document.getElementById('ad-to-crt-btn');

   btn.addEventListener('click', function handleClick() {
     btn.textContent = 'Go to cart';

   });
   
   
  
 }



/* getting date */

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
document.getElementById("order-date").innerHTML = currentDate;