//sliders autoplay
//intro slider
//	$('#carousel_fade_intro').carousel({
//		interval: 2500,
//
//	})
//	//works sliders
//	$('#carousel_horizontal_slide, #carousel_vertical_slide, #carousel_fade_1, #carousel_fade_2').carousel({
//		interval: false,
//
//	})

$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider0").responsiveSlides({
        manualControls: '#slider0-pager',
        maxwidth: 690,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});


$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider1").responsiveSlides({
        manualControls: '#slider1-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});

$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider2").responsiveSlides({
        manualControls: '#slider2-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});

$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider3").responsiveSlides({
        manualControls: '#slider3-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});

$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider4").responsiveSlides({
        manualControls: '#slider4-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});

$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider5").responsiveSlides({
        manualControls: '#slider5-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});

$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider6").responsiveSlides({
        manualControls: '#slider6-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});


$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider7").responsiveSlides({
        manualControls: '#slider7-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});


$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider8").responsiveSlides({
        manualControls: '#slider8-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});

$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider9").responsiveSlides({
        manualControls: '#slider9-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});


$(function () {
    //fake next, prev
    $('.rslides').parent().css('position', 'relative');
    // Slideshow 3
    $("#slider10").responsiveSlides({
        manualControls: '#slider10-pager',
        maxwidth: 670,
        auto: false,
        nav: true,
        pause: true,
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        prevText: '<i class="icon-chevron-left"></i>', // String: Text for the "previous" button
        nextText: '<i class="icon-chevron-right"></i>',
    });
});

function showRequest(formData, jqForm, options) {
    var queryString = $.param(formData);
    return true;
}
function showResponse(responseText, statusText) {
}
$.fn.clearForm = function () {
    return this.each(function () {
        var type = this.type, tag = this.tagName.toLowerCase();
        if (tag == 'form')
            return $(':input', this).clearForm();
        if (type == 'text' || type == 'password' || tag == 'textarea')
            this.value = '';
        else if (type == 'checkbox' || type == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};

//smooth scroll on page
$(function () {
    $('#more a, .nav a, .nav li a, .brand, #footer li a').bind('click', function (event) {
        var $anchor = $(this);

        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh')
        });

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 61
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });
});

//collapse menu on click on mobile and tablet devices
$('.nav a').click(function () {
    $(".nav-collapse").collapse("hide")
});
