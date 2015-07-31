;(function($, window, undefined) {
  var s;
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    s = skrollr.init({
        forceHeight: false
    });
  	$(window).on('resize', function() {
  		s.refresh();
  	});
  } else {    
    $('body').addClass('mobile');
  }
}(jQuery, window));
