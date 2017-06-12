
var urlImg = Number(getURLParameter("img"));

var imgPath = 'img/gal_lg/RockySkyPhoto-'+urlImg+'.jpg'
console.log("Getting image:" + imgPath);
$("#soloImg").attr('src',imgPath);
