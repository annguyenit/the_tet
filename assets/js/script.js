;(function($, window, undefined) {
  var s;
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    s = skrollr.init({
        forceHeight: false
    });
    $('body').addClass('mobile');
  } else {
    s = skrollr.init();
  }
	$(window).on('resize', function() {
		s.refresh();
	});
}(jQuery, window));
