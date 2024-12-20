//<img id="myImage" src ="style/images/img1.jpg"> // in the HTML
//This file is not used for thi project, the code is integrated in zodic.js
let image = document.getElementById("myImage");

image.addEventListener("click", function(){

   if (image.getAttribute("src") == "images/pred1.png"){
      image.src = "images/pred2.png"}
   else{
      image.src = "images/pred1.png";
      document.querySelector("#message").textContent = "";
   }
});
