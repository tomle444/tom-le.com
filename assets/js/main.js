$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').delay(550).fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(950).fadeOut('slow', function(){
		
	}); // will fade out the white DIV that covers the website. 
	$('body').delay(950).css({'overflow':'visible'});

	var slickJs = function(){
		$('#main-hero').slick({
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: false,
		    draggable: false,
		    autoplay: true,
		    autoplaySpeed: 2000,
		    fade: true,
		    adaptiveHeight: true,
		     asNavFor: '.slider-nav',
		    prevArrow: '<button class="slick-prev fa fa-angle-left" aria-hidden="true" />',
		    nextArrow: '<button class="slick-next fa fa-angle-right" aria-hidden="true" />'
		});
		$('.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.other-work-links',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			prevArrow: '<button class="slick-prev fa fa-angle-left" aria-hidden="true" />',
			nextArrow: '<button class="slick-next fa fa-angle-right" aria-hidden="true" />',
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3,
			    infinite: true,
			    dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}]
		});
	    // iLightbox
	    $('a.lightbox').iLightbox({
	        type: 'image', //'image', 'ajax', 'iframe', 'swf' and 'html'
	        loop: false, //loop media
	        arrows: false, //show arrows
	        closeBtn: true, //show close button
	        title: null, //title
	        href: null, //link to media
	        content: null, //html content
	        beforeShow: function(a, b) {},
	        onShow: function(a, b) {},
	        beforeClose: function() {},
	        afterClose: function() {},
	        onUpdate: function(a) {},
	        template: {
	            container: '<div class="iLightbox-container"></div>',
	            image: '<div class="iLightbox-media"></div>',
	            iframe: '<div class="iLightbox-media iLightbox-iframe"></div>',
	            title: '<div class="iLightbox-details"></div>',
	            error: '<div class="iLightbox-error">The requested content cannot be loaded.<br/>Please try again later.</div>',
	            closeBtn: '<a href="#" class="iLightbox-close"></a>',
	            prevBtn: '<div class="iLightbox-btnPrev"><a href="javascript:;"></a></div>',
	            nextBtn: '<div class="iLightbox-btnNext"><a href="javascript:;"></a></div>'
	        }
	    });
	}

	if($('body.index').length > 0){
		console.log($('body.index').length);
		slickJs();
	}
	
})

$(document).ready(function() {
	
    
});
