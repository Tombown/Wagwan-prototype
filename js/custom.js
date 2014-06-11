/*!
 * Custom JS
 * Copyright 2011-2014 Wagwan
 */

 $(window).resize(function () {
    if ($(window).width() < 360) {
        $("#button").insertAfter($("#map"));
    } else {
        $("#button").prepend($("#map"));
    }
});