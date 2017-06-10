"use strict";


$.get("templateHtml/logo.html",function(data){
  $("#logoPlaceholder").replaceWith(data);
});

$.get("templateHtml/navbar.html",function(data){
  $("#navbarPlaceholder").replaceWith(data);
  selectActiveNav();
});
$.get("templateHtml/footer.html",function(data){
  $("#footerPlaceHolder").replaceWith(data);
});
$.get("templateHtml/examples.html",function(data){
  $("#examplesPlaceHolder").replaceWith(data);
});
$.get("templateHtml/whyRocky.html",function(data){
  $("#examplesPlaceHolder").replaceWith(data);
});

// Called After loading the navbar
// Removes active from all navs then assign it to one where the ID is in the URL
// Possible problem with partial matches.
function selectActiveNav(){
  var loc = window.location.pathname;

  $(".navbar .navbar-nav > li").each(function() {
      return; //This isn't needed, might add in later if things get more complicated.
    $(this).removeClass("active");
    if ( loc.match($(this).attr('id'))) {
      $(this).addClass("active");
    }
  });
  if(loc.match("gallery.html")){
    $("#navbar").addClass("navbar-fixed-top");
    console.log("Gallery Matched");
  }
}

function findBootstrapEnvironment() {
  var envs = ['xs', 'sm', 'md', 'lg'];
  var $el = $('<div>');
  $el.appendTo($('body'));

  for (var i = envs.length - 1; i >= 0; i--) {
    var env = envs[i];

    $el.addClass('hidden-'+env);
    if ($el.is(':hidden')) {
      $el.remove();
      return env;
    }
  }
}

$("#info").text(findBootstrapEnvironment());
$("#screen").text($(document).height() + "--" + $(window).height());
$("#screen2").text($(document).width() + "--" + $(window).width());
$("#deviceType").text(navigator.userAgent);

//Replace html with youtube video on iOS devices
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {

}

$(window).resize(function(){
  $("#info").text(findBootstrapEnvironment());
  $("#screen").text($(document).height() + "--" + $(window).height());
  $("#screen2").text($(document).width() + "--" + $(window).width());
});



function getURLParameter(name) {
  // http://stackoverflow.com/questions/11582512/how-to-get-url-parameters-with-javascript/11582513#11582513
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

// http://stackoverflow.com/a/23769601/901311
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});
