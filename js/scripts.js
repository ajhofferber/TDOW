$(document).ready(function(){


})
$(window).scroll(function(){
    $(".element-1").css("top",Math.max(-900,1000-$(this).scrollTop()));
});
