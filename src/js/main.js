

// custom dots for carousel

var action = false, clicked = false;
var Owl = {

    init: function() {
      Owl.carousel();
    },

	carousel: function() {
		var owl;
		$(document).ready(function() {
			
			owl = $('.owlExample').owlCarousel({
        items 	 : 1,
        autoplay: true, 
        autoplayHoverPause: true,
        autoplayTimeout: 5500,
				center: true, 
        nav: true,
        navText: ["",""],
        dots: true,
        dots:  5,
				loop: true,
				margin: 10,
				dotsContainer: '.test',
			
			});
			  $('.owl-next').on('click',function(){
			  	action = 'next';
			  });

			  $('.owl-prev').on('click',function(){
			  	action = 'prev';
			  });

			 $('.bookmarks').on('click', 'li', function(e) {
			    owl.trigger('to.owl.carousel', [$(this).index(), 500]);
			  });
		});
	}
};


$(document).ready(function() {
  Owl.init();
});

// fancybox gallery

$().fancybox({
  selector : '.imglist a:visible',
  thumbs   : {
    autoStart : true
  }
});

// burger button

(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu')
          .toggleClass('menu_state_open');
      });
      
      $('.menu__links-item').on('click', function() {
        // do something
  
        $(this).closest('.menu')
          .removeClass('menu_state_open');
      });
    });
  })(jQuery);
  

  // owl carousel main

  $('.owl_first').owlCarousel({
    loop:true,
    autoplay:true, 
    autoplayTimeout:4500,
    autoplayHoverPause:true,
    margin:0,
    nav:true,
    navText : ["",""],
    dots: true,
    dots: 5,
    responsive:{
    0:{
        items:1
        },
    600:{
          items:1
        },
    800:{
        items:1
        },
    1100: {
        items: 1
    }
    }
  });    

  // youtube video

$('.link').fancybox({
  openEffect  : 'none',
  closeEffect : 'none',
  helpers : {
      media : {}
  }
});

