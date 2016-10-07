
// https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/
// var currentSlide = 0;
// // var slideInterval = setInterval(nextSlide,500);
// var slides = document.querySelectorAll(".slideShowContent");
//
//
//
// function nextSlide() {
//     slides[currentSlide].className = 'slideShowContent';
//     currentSlide = (currentSlide+1)%slides.length;
//     slides[currentSlide].className = 'slideShowContent show';
// }

// http://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var video = document.getElementById('video');
video.addEventListener('click',function(){
  video.play();
  alert("playing!!!");
},false);
