/** *************Init JS*********************

	

    TABLE OF CONTENTS

	---------------------------

	1)Preloader Effect

	2)Ready function

	3)Auto height function

	4)SmoothScroll

	5)Carousel Slider

	6)Image Responsive Function

	7)Contact Form

	

 ** ***************************************/

/*************************************/

!function($){

    "use strict";

    

    var Core = {

        

        initialize: function() {

            

            //miagency Script

			this.carousels();

            

            //smoothScroll

            this.Scroll();

            

            //like

            this.like();

            

            //Placeholder JS call

            this.placeholders();

            

            //Photo Grid. 

            this.photoset();

            

            //custom js.

            this.custom();

            //filter.

            this.filter();
                        

            //portfolio filter

            this.portfolio();



            //flickr.

            this.flickr();

            

            //clients.

            this.clients();

            

            //photography.

            this.photography();

            

        },

        init: function(){

            $(".status").fadeOut();

            // will fade out the whole DIV that covers the website.

        	$(".preloader").delay(100).fadeOut("slow");

        	$("body").css('overflow-y','visible');

        },

        flickr: function(){

             var $flickrFeedEl = $('.flickr-feed');

        	 if( $flickrFeedEl.length > 0 ){

        		$flickrFeedEl.each(function(){

        			var element = $(this),

        				flickrFeedID = element.attr('data-id'),

        				flickrFeedCount = element.attr('data-count'),

        				flickrFeedType = element.attr('data-type'),

        				flickrFeedTypeGet = 'photos_public.gne';

        

        			if( flickrFeedType == 'group' ) { flickrFeedTypeGet = 'groups_pool.gne'; }

        			if( !flickrFeedCount ) { flickrFeedCount = 9; }

        

        			element.jflickrfeed({

        				feedapi: flickrFeedTypeGet,

        				limit: Number(flickrFeedCount),

        				qstrings: {

        					id: flickrFeedID

        				},

        				itemTemplate: '<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item">' +

        									'<img src="{{image_s}}" alt="{{title}}" />' +

        							  '</a>'

        			})

        		});

  		    }

        },

        photography: function(){

            $("#auto-loop").lightGallery();

            var $gallery = $('.gallery.megafolio-container');

   	        if( $gallery.length > 0 ){

   	            var api=jQuery('.gallery.megafolio-container').megafoliopro({

            		filterChangeAnimation:"scale",	// fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle

            		filterChangeSpeed:800,					// Speed of Transition

            		filterChangeRotate:99,					// If you ue scalerotate or rotate you can set the rotation (99 = random !!)

            		filterChangeScale:1,					// Scale Animation Endparameter

            		delay:40,

            		defaultWidth:980,							// The Time between the Animation of single mega-entry points

            		paddingHorizontal:30,					// Padding between the mega-entrypoints

            		paddingVertical:90,

            		layoutarray:[14],		// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.

            						

            	});

   	        }

                

        },

        clients: function(){

            var ocClients = $("#oc-portfolio-sidebar");

            if( ocClients.length > 0 ){

        		ocClients.owlCarousel({

        			items: 1,

        			margin: 10,

        			loop: true,

        			nav: false,

        			autoplay: true,

        			dots: true,

        			autoplayHoverPause: true

        		});

            }

        },

        filter: function(){

            $('#nav span').click(function() {

        		$('#filterOptions').toggleClass('drp-effect');

        		$('.down-arrow').toggleClass('hide-drp');

        		$('.up-arrow').toggleClass('hide-drp');

        	});

        

        	$('.filter').click(function() {

        		$('#filterOptions').toggleClass('drp-effect');

        		var opt = $(this);

        		$('#nav li span').text(opt.text());

        		$('.down-arrow').toggleClass('hide-drp');

        		$('.up-arrow').toggleClass('hide-drp');

        	});

            

            var $megafolio = $('.megafolio-container');

       	    if( $megafolio.length > 0 ){

       	        var api=jQuery('.megafolio-container').megafoliopro(

    			{

    				filterChangeAnimation:"scale",	// fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle

    				filterChangeSpeed:800,					// Speed of Transition

    				filterChangeRotate:99,					// If you ue scalerotate or rotate you can set the rotation (99 = random !!)

    				filterChangeScale:1,					// Scale Animation Endparameter

    				delay:40,

    				defaultWidth:980,							// The Time between the Animation of single mega-entry points

    				paddingHorizontal:20,					// Padding between the mega-entrypoints

    				paddingVertical:20,

    				layoutarray:[10],		// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.

    			});

       	        

       	    }

                

			// CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED

			jQuery('.filter').click(function() {

				jQuery('.filter').each(function() { jQuery(this).removeClass("selected")});

				api.megafilter(jQuery(this).data('category'));

				jQuery(this).addClass("selected");

			});

        },

        carousels: function() {

            

            /*Carousel Slider*/

            $('.carousel').carousel({

                interval: 450000 //changes the speed

            });

        },

        imgsize: function(){

            var W = $(window).width();

            var team_image = $(window).width();

            $('.project-img-sec img').width(W);

    

            if (W >= 1270) {

                $('.team-person-image img').width(team_image / 4.71);

            } else if (W <= 1270 && W >= 1202) {

                $('.team-person-image img').width(team_image / 4.84);

            } else if (W < 1202) {

                $('.team-person-image img').width(team_image / 3.84);

            }

            if (W >=975) {

				$('.half-size-img img').width(W / 2);

				$('.about-half-img').width(W / 2);

				$('.about-one-forth-img').width(W / 4);

			}	

			else {

				$('.half-size-img img').width(W);

				$('.about-half-img').width(W);

				$('.blog-half-img').width(W);

			}

            

        },

        divresize: function(){

            var min = $('#img_id').height();

    		var min1 = $('.blog-half-img').height();

            $('.about-image-block').height(min);

        },

        resize: function(){

            var currentWidth = 1100;

    		var winWidth = $(window).width();

    		var conWidth;

    		var col;

    		if(winWidth < 361) {

    			conWidth = winWidth;

    			col = 1

    		} else if(winWidth < 641) {

    			conWidth = winWidth;

    			col = 2

    		} else if(winWidth < 769) {

    			conWidth = winWidth;

    			col = 2

    		} else if(winWidth > 768) {

    			conWidth = winWidth;

    			col = 3;

    		} else {

    			conWidth = winWidth;

    			col = 3;

    		}

    		

    		if(conWidth != currentWidth) {

    			currentWidth = conWidth;

    			$('#masonry-full-width').width(conWidth);

    			$('#masonry-full-width').BlocksIt({

    				numOfCol: col,

    				offsetX: 0,

    				offsetY: 0

    			});

    		}

        },

        setElementHeight: function(){

            var height = $(window).height();

            var width = $(window).width();

            if (width > 1024) {

                $('.autoheight').css('min-height', (height));

            } 

        	else {

                $('.autoheight').css('min-height', 'auto');

            }

        },

        Scroll: function(){

            var height = $(".greyAwning").height();

            smoothScroll.init({

                speed: 1000,

                easing: 'easeInOutCubic',

                offset: height,

                updateURL: false,

                callbackBefore: function(toggle, anchor) {},

                callbackAfter: function(toggle, anchor) {},

            });

            

            var height = 10;

			var windscroll = $(window).scrollTop();

			if(windscroll >= height){

				$('#header-wraper').addClass('short');

                $('.photo-about').addClass('long');

			}

			else{

				$('#header-wraper').removeClass('short');

                $('.photo-about').removeClass('long');

			}

        	

        },

        like: function(){

           $('.nav-proj a[rel="prev"]').addClass('prev black');
           $('.nav-proj a[rel="next"]').addClass('next black');

        },

        placeholders: function(){

           $('input[type=text], textarea').placeholder(); 

        },

        photoset: function(){

           $('.photoset-grid').photosetGrid({

    		  highresLinks: false,

    		  gutter: '0px',

	       }); 

           

           $('.team-wraper').each(function() { // the containers for all your galleries

                var $this = $( this );

                var element = $this.find( ' .gallery-item' );

                $(this).magnificPopup({

                    delegate: element, // the selector for gallery item

                    type: 'image',

                    gallery: {

                      enabled:true

                    }

                });

           });

           

           $('.photoset-grid').each(function() { // the containers for all your galleries

                var $this = $( this );

                var element = $this.find( ' .gallery-item' );

                $(this).magnificPopup({

                    delegate: element, // the selector for gallery item

                    type: 'image',

                    gallery: {

                      enabled:true

                    }

                });

           });

        },

        isScrolledIntoView: function(elem){

            var docViewTop = $(window).scrollTop();

			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top;

			var elemBottom = elemTop + $(elem).height();

			return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));   

        },

        custom: function(){

            $( '.brand-row01:last-child' ).removeClass( 'brand-row01' ).addClass( 'brand-row02' );

            $( '.blog-v2:odd' ).addClass( 'second' );

            $( "#resizable" ).resizable({handles: {'e': '#handle'}}); //Resizable JS.

        },

        portfolio: function(){

            var api=jQuery('.portfolio-v2 .megafolio-container').megafoliopro({

    			filterChangeAnimation:"scale",	// fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle

    			filterChangeSpeed:800,					// Speed of Transition

    			filterChangeRotate:99,					// If you ue scalerotate or rotate you can set the rotation (99 = random !!)

    			filterChangeScale:1,					// Scale Animation Endparameter

    			delay:40,

    			defaultWidth:980,							// The Time between the Animation of single mega-entry points

    			paddingHorizontal:20,					// Padding between the mega-entrypoints

    			paddingVertical:20,

    			layoutarray:[2,3,2],		// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.

    			

    		});

        },

        masonry: function(){

            var currentWidth = 1100;

            var winWidth = $(window).width();

    		var conWidth;

    		var col = '';

    		if(winWidth < 361) {

    			conWidth = winWidth;

    			col = 1

    		} else if(winWidth < 641) {

    			conWidth = winWidth;

    			col = 2

    		} else if(winWidth < 769) {

    			conWidth = winWidth;

    			col = 2

    		} else if(winWidth > 768) {

    			conWidth = winWidth;

    			col = 3;

    		} else {

    			conWidth = winWidth;

    			col = 3;

    		}

    		

    		if(conWidth != currentWidth) {

    			currentWidth = conWidth;

    			$('#masonry-full-width').width(conWidth);

    			$('#masonry-full-width').BlocksIt({

    				numOfCol: col,

    				offsetX: 0,

    				offsetY: 0

    			});

    			

    		}

        }

        

        

    }

    

    $(document).ready(function() {

        Core.initialize(); 

    }); 

    

    $(window).on("resize", function() {

        Core.imgsize();

        Core.divresize();

        Core.setElementHeight();

        Core.masonry();

    }).resize();



    $(window).on("load", function() {

        Core.init();

        Core.imgsize();

        Core.divresize();

        Core.resize();

    });

    $(window).on("scroll", function() {

        if( $('.about-count').length ){

    		if (Core.isScrolledIntoView($('.about-count'))) {

    			$('.about-count').countTo();

    			$(window).off('scroll');

    		}

        }

    });   

    

 

}(jQuery);