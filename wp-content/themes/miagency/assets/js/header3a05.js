!function ($) {
    $(document).ready(function () {
        $('.link-menu').click(function () {
            $(".link-menu").toggleClass("minus");
        });
//        $("#header .menu .black").clone().removeClass("black").addClass("white").insertAfter($("#header .menu .black"));
//        $(" .menu .black").clone().removeClass("black").addClass("nav navbar-nav").appendTo($(".navbar-collapse"));


        $(".workItem").each(function () {
            $(this).css({
                backgroundImage: "url(" + $(this).attr("data-image") + ")",
                backgroundSize: $(this).attr("data-size"),
                backgroundColor: $(this).attr("data-extraColor")
            });
            $(this).find("div").css({
                opacity: 0,
                display: "block"
            });
        });

    });




    var loaded = false;


    var menuAnimating = false;
    var menuIsOpen = false;


    $(document).on("click", "#header .menuToggle", function () {
        if (menuAnimating == true)
            return;

        if (menuIsOpen == true) {
            closeMenu();
            return;
        }

        $("#header .menu ul").not(".dropdown-menu").css({
            display: "block"
        }).find("li").css({
            opacity: 0
        });
        var menuWidth = parseInt($("#header .menu ul").width(), 10);
        menuAnimating = true;
        menuIsOpen = true;
        $("#header .menuToggle").stop(true, true).animate({
            marginRight: menuWidth + "px"
        }, menuWidth * 2, "easeOutQuart", function () {
            menuAnimating = false;
        });

        $("#header .menu ul li").each(function (i) {
            var delay = (($("#header .menu > ul > li").length - i - 1) * 100) + 100;
            $(this).stop(true, true).delay(delay).animate({
                opacity: 1
            }, 300);
        });
    });

    function closeMenu() {
        $("#header .menu ul li").stop(true, true, false).animate({
            opacity: 0
        }, 80, function () {
            $("#header .menu ul").css({
                display: "none"
            });
        });
        $("#header .menuToggle").stop(true, true, false).animate({
            marginRight: "0px"
        }, 500, "easeOutQuart", function () {
            menuAnimating = false;
            menuIsOpen = false;
        });
    }

    $(window).scroll(scrolled);

    function scrolled() {
        var ST = parseInt($(window).scrollTop(), 10);
        if (ST > 555) {
            $("#header").addClass('fix-to-top');
            $("#about-tet").css('padding-top', '79px');
        } else {
            $("#header").removeClass('fix-to-top');
            $("#about-tet").css('padding-top', '0px');
        }
    }
    
    function adjustStyle(width) {
        width = parseInt(width);
        if (width < 768) {

            $('.navbar-collapse ul').css({
                "height": "auto",
                "overflow": "visible",
            });

        }
    }

    $(function () {
        adjustStyle($(this).width());
        $(window).resize(function () {
            adjustStyle($(this).width());
        });
    });


}(jQuery);