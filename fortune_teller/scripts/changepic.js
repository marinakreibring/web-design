//<img id="myImage" src ="style/images/img1.jpg"> // in the HTML
let image = document.getElementById("prediction");

image.addEventListener("click", function(){

   if (image.getAttribute("src") == "images/pred1.png"){
      image.src = "images/pred2.jpg"}
   else{
      image.src = "images/pred1.png"}
});
