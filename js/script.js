$(document).ready(function() {
    $(".burger-icon").on("click", function() {
        $(".main-nav").addClass("main-nav-open");
    });
    $(".burger-icon").on("click", function() {
        $(".burger-icon").addClass("hide-class");
    });
    $(".burger-icon").on("click", function() {
        $(".header-logo-link").addClass("hide-class");
    });
    $(".burger-icon").on("click", function() {
        $(".mobile-logo").addClass("display-block-class");
    });
    $(".burger-icon").on("click", function() {
        $(".user-nav-wrapper").addClass("set-height-auto");
    });

    $(".close-icon svg").on("click", function() {
        $(".main-nav").removeClass("main-nav-open");
    });

    $(".close-icon svg").on("click", function() {
        $(".burger-icon").removeClass("hide-class");
    });

    $(".close-icon svg").on("click", function() {
        $(".header-logo-link").removeClass("hide-class");
    });

    $(".close-icon svg").on("click", function() {
        $(".mobile-logo").removeClass("display-block-class");
    });

    $(".close-icon svg").on("click", function() {
        $(".user-nav-wrapper").removeClass("set-height-auto");
    });
});