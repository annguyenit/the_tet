;(function($, window, undefined) {
  var s,
  isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
  if(!isMobile){
    s = skrollr.init({
        forceHeight: false
    });
  	$(window).on('resize', function() {
  		s.refresh();
  	});
  } else {    
    $('body').addClass('mobile');
  }
  $('#about-tet .flexslider').flexslider({
      smoothHeight: true,
      animation: "fade",
      slideshow: false,
      start: function (slider) {
          $('body').removeClass('loading');
      },
      after: function() {
        if(!isMobile) {
          s.refresh();         
        }
      }
  });
  s.refresh(); 
}(jQuery, window));
