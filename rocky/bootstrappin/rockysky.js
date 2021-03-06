"use strict";

$.get("logo.html",function(data){
  $("#logoPlaceholder").replaceWith(data);
  console.log("Replace Logo");
});

$.get("navbar.html",function(data){
  $("#navbarPlaceholder").replaceWith(data);
  selectActiveNav();
});

// Called After loading the navbar
// Removes active from all navs then assign it to one where the ID is in the URL
// Possible problem with partial matches.
function selectActiveNav(){
  var loc = window.location.pathname;
  $(".navbar .navbar-nav > li").each(function() {
    // console.log("ID:" + $(this).attr('id'));
    $(this).removeClass("active");
    if ( loc.match($(this).attr('id'))) {
      $(this).addClass("active");
    }
  });
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

$(window).resize(function(){
  $("#info").text(findBootstrapEnvironment());
  $("#screen").text($(document).height() + "--" + $(window).height());
  $("#screen2").text($(document).width() + "--" + $(window).width());
});
