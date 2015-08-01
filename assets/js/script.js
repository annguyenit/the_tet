;(function($, window, undefined) {
  var sayWho = function() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/);
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
  };
  var resizeDiv = function(){
    vpw = $(window).width();
    vph = $(window).height();
    $('.vh-height').css({'height': vph + 'px'});
  };
  if((/Safari 5|Safari 6|Safari 7/i).test(sayWho())) {
    $('body').addClass('mobile');
    resizeDiv();    
    $(window).on('resize.resizeDiv', function() {
      resizeDiv();  
    }); 
  }
  var s,
  isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
  if(!isMobile){
    s = skrollr.init({
        forceHeight: false
    });
    $(window).on('resize.refresh', function() {
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
