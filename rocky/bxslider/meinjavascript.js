
$(document).ready(function(){
  $('.bxslider').bxSlider({
    video: true,
    // onSliderLoad: autoPlay,
    onSlideBefore: autoPlayWrapper,
    onSlideAfter: pauseVideo
  });
});

// Calls the autoPlay function with the index of the next slide
function autoPlayWrapper(asdf,asdf1,index){
  console.log(asdf);
  autoPlay(index);
}

// play the video in the slide at index
function autoPlay(index){
  var idx = parseInt(index,10);
  var vid = document.querySelector("#vid"+idx);
  if(vid){
    vid.play();
  }
}

function pauseVideo(asdf,index,asdf2){
  console.log(asdf);
  var idx = parseInt(index,10);
  var vid = document.querySelector("#vid"+idx);
  if(vid){
    vid.pause();
  }
}

$("button").click(function(){
  console.log("Buttoned");
  document.querySelector("#vid0").play();
})

$.get("logo.html",function(data){
  $(".logoPlaceholder").replaceWith(data);
});

$.get("navbar.html",function(data){
  $("#navbarPlaceholder").replaceWith(data);
});
