"use strict";

$(document).ready(function () {
  //initialize swiper when document ready
  //TODO: use a loop to initilize swipers - brute forcing it for now.
  //See jquery solutionss here: https://github.com/nolimits4web/Swiper/issues/273
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
    keyboardControl: true,
    autoplay: 1000
    // scrollbar: '.swiper-scrollbar'
  })

  var fadeSwiper2 = new Swiper ('.fadeswipe2', {
    // Optional parameters
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    onSlideChangeStart: slideChange,
    // scrollbarHide: false,
    paginationClickable: true,
    effect: 'fade',
    keyboardControl: false,
    // scrollbar: '.swiper-scrollbar'
  })

  //only show .5 slides on the pano for XS (mobile) screens.
  var slidesPerPano = ($(window).width() < 768) ? .5 : 1.5;
  console.log(slidesPerPano);

  var panoswipe = new Swiper ('.panoswipe', {
    // Optional parameters
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    freeMode:true,
    slidesPerView: slidesPerPano,
    keyboardControl: false,
    grabCursor: true
  });
});



var usingiOS = false;
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
  usingiOS = true;
}

function slideChange(swiper){
  if(usingiOS) return; //iOS shouldn't autoplay video.
  var index = swiper.activeIndex;
  var vid = swiper.slides[index].querySelector("#video");
  if(vid){
    // console.log("We're on video!");
    vid.play();
  }else{
    //EmptyElse for now....
  }
}

// Android fix
// Using touchstart will play the video as soon as the screen is touched.
// get the video
if(!usingiOS){
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
