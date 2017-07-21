/**
 * Created by admin on 2017/7/20.
 */
$(function () {
    $(".two").hover(function () {
        $(this).css("background","#fff");
        $(this).find("a").css("color","#FF6700");
        $(this).find("div").stop().slideDown();
    },function () {
        $(this).css("background","");
        $(this).find("a").css("color","");
        $(this).find("div").stop().slideUp();
    })

    $(".nav2 li a").hover(function () {
        $(this).next("div").stop().slideDown();
        $(this).css("color","#FF6700");
    },function () {
        $(this).next("div").stop().slideUp();
        $(this).css("color","");
    })

    $(".banner .left li").hover(function () {
        $(this).find("div").stop().show();
        $(this).css("background","#FF6700");
    },function () {
        $(this).find("div").stop().hide();
        $(this).css("background","");
    })
})