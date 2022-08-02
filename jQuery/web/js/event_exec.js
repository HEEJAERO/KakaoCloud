$(function(){
    $("li").mouseenter(function(){
        $(this).addClass("myStyle");
    })
    $("li").mouseleave(function(){
        $(this).removeClass("myStyle");
    })
})