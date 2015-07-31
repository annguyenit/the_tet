;(function($, window, undefined) {
	var s = skrollr.init({
		smoothScrolling: false
	});
	$(window).on('resize', function() {
		s.refresh();
	});
		// $(document).on("scroll.scoll-2", onScroll1);
  //   $('.flex-control-nav a[href^="#"]').on('click', function (e) {
  //       e.preventDefault();
  //       $(document).off("scroll.scroll-2");

  //       $('.flex-control-nav a').removeClass('flex-active');
  //       $(this).addClass('flex-active');

  //       var $anchor = $(this);
  //       $('html, body').stop().animate({
  //           scrollTop: $($anchor.attr('href')).offset().top
  //       }, 800, 'easeInOutExpo', function () {
  //           $(document).on("scroll.scoll-2", onScroll1);
  //       });
  //   });
  //   function onScroll1(event){
  //       var scrollPos = $(document).scrollTop();
  //       $('.flex-control-nav a[href^="#"]').each(function () {
  //           var currLink = $(this);
  //           var refElement = $(currLink.attr("href")).next();
  //           var refPost = refElement.position().top;
  //           if (refPost <= scrollPos && refPost + refElement.height() > scrollPos) {
  //               $('.flex-control-nav a').removeClass("flex-active");
  //               currLink.addClass("flex-active");
  //           } else {
  //               currLink.removeClass("active");
  //           }
  //       });
  //   }
}(jQuery, window));
