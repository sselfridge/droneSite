"use strict";

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.stdswipe', {
    // Optional parameters
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    onSlideChangeStart: slideChange,
    // scrollbarHide: false,
    paginationClickable: true,
    keyboardControl: true
    // scrollbar: '.swiper-scrollbar'
  })
  var fadeSwiper = new Swiper ('.fadeswipe', {
    // Optional parameters
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    onSlideChangeStart: slideChange,
    // scrollbarHide: false,
    paginationClickable: true,
    effect: 'fade',
    keyboardControl: true
    // scrollbar: '.swiper-scrollbar'
  })
});


$(".statusBox").css("background","red");

function slideChange(swiper){
  var index = swiper.activeIndex;
  var vid = swiper.slides[index].querySelector("#video");
  if(vid){
    // console.log("We're on video!");
    vid.play();
    $(".statusBox").css("background","yellow");
  }else{
    $(".statusBox").css("background","orange");
  }
}

// Android fix
// Using touchstart will play the video as soon as the screen is touched.
// get the video
if(!((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)))) {

  var video = document.querySelector('#video');
  // use the whole window and a *named function*
  window.addEventListener('touchstart', function videoStart() {
    video.play();
    // console.log('first touch');
    // remove from the window and call the function we are removing
    this.removeEventListener('touchstart', videoStart);
  });
}


//iphone fix
// youtube code:
// <div class="videoWrapper"><iframe src="https://www.youtube.com/embed/2kbdn804h7s" frameborder="0" allowfullscreen></iframe></div>
