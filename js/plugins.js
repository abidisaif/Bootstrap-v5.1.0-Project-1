/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    // Nice Scroll
    $("body").niceScroll({
        cursorcolor:"aquamarine",
        cursorwidth:"16px"
      });
    // Change Carousel Time
    $('.carousel').carousel({
        interval: 6000
    });
    // Change Carousel Time
    // Show Color Option Div When Click On The Gear
       $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    // Show Color Option Div When Click On The Gear
    // Change Theme Color On Click
    var colorLi = $(".color-option ul li")
    colorLi.eq(0).css("backgroundColor", "#E41B17").end()
           .eq(1).css("backgroundColor", "#E426D5").end()
           .eq(2).css("backgroundColor", "#009AFF").end()
           .eq(3).css("backgroundColor", "#FFD500");
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    // Change Theme Color On Click
    // Scroll To Top
        // Caching The Scroll Top Element
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
        // Click On Button To Scroll Top
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop : 0 }, 600);
    });
    // Scroll To Top
    
});