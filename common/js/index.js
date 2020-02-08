$(function(){
  $(' a[href^="#"]').click(function(){
    var adjust=50;
    var speed=400;
    var href=$(this).attr("href");
    var target=$(href=="#"||href==""?'html':href);
    var position=target.offset().top - adjust;
    $('body,html').animate({scrollTop:position},speed, 'swing');
    return false;
  });
});

$('#button').click(function() {
var h1 = $('h1').offset().top;
$('html, body').animate({scrollTop:h1});

});
