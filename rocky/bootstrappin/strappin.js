$.get("logo.html",function(data){
  $("#logoPlaceholder").replaceWith(data);
});

$.get("navbar.html",function(data){
  $("#navbarPlaceholder").replaceWith(data);
});

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
