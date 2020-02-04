var image = document.getElementById("image");
 
var imageArray = ["images/image1.jpg","images/image2.jpg","images/image3.jpg"];
 
var imageIndex = 0;
 
function changeImage() {
   console.log("set image");
   image.style.backgroundImage = "url('" + imageArray[imageIndex] + "')";
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}
 
window.onload = function() {
   console.log("loaded");
   setInterval(changeImage,2000);
 
}