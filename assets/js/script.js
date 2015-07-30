;(function($, window, undefined) {
	var list = {}
	var getPro = function() {
		var i = 0;
		$('#project').find('.project').each(function() {	
			var that = this;
			list['project' + i] =  function() {
				return $(that).offset().top;	
			}
			i++;
		});
	};
	getPro();
	var s = skrollr.init({
		constants: list
	});
	$(window).on('resize', function() {
		s.refresh();
	});
}(jQuery, window));