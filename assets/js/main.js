/***
**	A simple preloader on page load
***/

$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').delay(550).fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(950).fadeOut('slow', function(){
		
	}); // will fade out the white DIV that covers the website. 
	//$('body').delay(950).css({'overflow':'visible'});

	
	// check for the homepage
	if($('body.index').length > 0){
		//slickJs();
	}
	
})


$(function () {

    windowWidth = window.innerWidth;	
    siteWidth = $('.site-wrapper').width();
    
    currentScrollPos = 0;
    scrollLeft = $('.site-wrapper-inner').scrollLeft();
    currentSlide = 1;
    slideCount = $('section').length;

    $(window).on('resize', function(){
    	// if the window gets resized, reset the window width variable to the new resized width
    	windowWidth = window.innerWidth;
    	console.log(windowWidth);
    	if(currentSlide != 1){
   			// animate the container to the right
			$('.site-wrapper-inner').animate({ 
				scrollLeft: 0
				}, { duration: 1000, queue: false 
			});		 

			$('.bg-2').animate({
				'background-position-x': ('+='+windowWidth * 0.1) + 'px'}, 
			{ duration: 1000, queue: false 
			});

			$('.bg-1').animate({
				'background-position-x': ('+='+windowWidth * 0.05) + 'px'}, 
			{ duration: 1000, queue: false 
			});
			currentSlide = 1;
		}
    });

    // init functions
    var run = function(){
    	if($('body.index').length){

	    	navOnMouseWheel();
	    	navOnClick();
	    	bottomNavigationClick();
    	}
    	
    	navMenuOnClick();
    	overlayProject();
    	
    }

    var navMenuOnClick = function(){

    	// when user clicks on the navigation menu link, open up links to sections
    	$('.menu-icon').on('click', function(){
    		//console.log('clicked');
    		$('.nav-overlay').toggleClass('active not-active');
    	});
    }

    var preventDefault = function(e){

		e = e || window.event;
		if (e.preventDefault){
			e.preventDefault();
			e.returnValue = false;  
		}

    }

    var navOnMouseWheel = function(){ 	
    	// added _.throttle function to delay animation and counter from firing too much ** THANKS to underscore.js **
    	$('.site-wrapper-inner').on('DOMMouseScroll mousewheel', _.throttle(function(event, delta) {
	        event.preventDefault();
	        var scrollLeftMouseWheel = $(this).scrollLeft();
	       
	        //console.log(event.deltaX, event.deltaY, event.deltaFactor, scrollLeftMouseWheel, currentScrollPos);

	        // on mousewheel up, scroll bg to the left
	        // on mousewheel down, scroll bg to the right
	        // when the mousewheel is at the beginning, only animate to the next and don't animate below 0
        
		    if(currentSlide == 1){
			    if(event.deltaY < 0){
			    	animateBgNext();
			    	$('nav.bottom a.active').removeClass('active').next().addClass('active');
			    } 
			} else { 
				if(event.deltaY < 0){
					if(currentSlide != slideCount){
		    			animateBgNext();
		    			$('nav.bottom a.active').removeClass('active').next().addClass('active');
		    		}
		    	} else {
		    		animateBgPrev();
		    		$('nav.bottom a.active').removeClass('active').prev().addClass('active'); 
		    	}
		    }
		    	
	    	// set the current scroll position to the scroll left position of the container while the mousewheel event is active
	    	currentScrollPos = scrollLeftMouseWheel;
	        return false;
	        
	    }, 2000));
    }
    
    var navOnClick = function(){
    	
    	// when using the navigation next/previous on click links

    	$('a.next').on('click', _.throttle(function(e){
    		animateBgNext();
    		$('nav.bottom a.active').removeClass('active').next().addClass('active');
    	}, 1000));

    	$('a.prev').on('click',  _.throttle(function(e){
   			animateBgPrev();		
   			$('nav.bottom a.active').removeClass('active').prev().addClass('active'); 
    	}, 1000));

    	$('.slide-home').on('click', _.throttle( function(e){
    		if(currentSlide != 1){
	   			// animate the container to the right
				$('.site-wrapper-inner').animate({ 
					scrollLeft: 0
					}, { duration: 1000, queue: false 
				});		 

				$('.bg-2').animate({
					'background-position-x': ('+='+windowWidth * 0.1) + 'px'}, 
				{ duration: 1000, queue: false 
				});

				$('.bg-1').animate({
					'background-position-x': ('+='+windowWidth * 0.05) + 'px'}, 
				{ duration: 1000, queue: false 
				});
				currentSlide = 1;
			}

    	}, 1000));




    	// Change active state on click on bottom navigation
    	$(".bottom a").on("click", function(){
		   $(".bottom").find(".active").removeClass("active");
		   $(this).addClass("active");
		});
    	
    }

    var animateBgNext = function(){
    	
    	var thisScrollLeft = $('.site-wrapper-inner').scrollLeft();

    	isAnimating = true;

	    var oneIsDone = false,
	        finish = function() {
	            // if both animations are done, set the flag to false
	            if(oneIsDone) {
	                isAnimating = false;
	                console.log(isAnimating);
	            }
	            // at least one is done...
	            oneIsDone = true;
	        };

    	// scroll position is at the beginning position
    	if(currentScrollPos == 0 || currentScrollPos != thisScrollLeft ){ 		
    		
    		if( currentSlide != slideCount ){
    			// animate the container to the left 
		    	$('.site-wrapper-inner').animate({ 
					scrollLeft: ('+='+windowWidth)
					}, { duration: 1000, queue: false 
				}, finish());

		    	// set the new current scroll posittion to local variable
				currentScrollPos = thisScrollLeft;				

				$('.bg-2').animate({
					'background-position-x': ('-='+windowWidth * 0.1) + 'px'}, 
				{ duration: 1000, queue: false 
				});

				$('.bg-1').animate({
					'background-position-x': ('-='+windowWidth * 0.05) + 'px'}, 
				{ duration: 1000, queue: false 
				});				

				currentSlide++;
				
    		}
    		
		}
		return false;
    }

    var animateBgPrev = function(){

    	var thisScrollLeft = $('.site-wrapper-inner').scrollLeft();

    	isAnimating = true;

	    var oneIsDone = false,
	        finish = function() {
	            // if both animations are done, set the flag to false
	            if(oneIsDone) {
	                isAnimating = false;
	            }
	            // at least one is done...
	            oneIsDone = true;
	        };


    	// animate the container to the left 
    	if(thisScrollLeft != 0){

    		if(currentSlide > 1){
    			// animate the container to the right
				$('.site-wrapper-inner').animate({ 
					scrollLeft: ('-='+windowWidth)
					}, { duration: 1000, queue: false 
				}, finish());
	    		
	    		$('.bg-2').animate({
					'background-position-x': ('+='+windowWidth * 0.1) + 'px'}, 
					{ duration: 1000, queue: false 
				}, finish());
				$('.bg-1').animate({
					'background-position-x': ('+='+windowWidth * 0.05) + 'px'}, 
					{ duration: 1000, queue: false 
				}, finish());


				currentSlide--;
    		}
    		
    	}   	
		
		return false;
    }


    var overlayProject = function(){

		var overlayProject = $('.overlay-project');
		var overlayResults = $('.overlay-results');


    	/***
		**	Get Info - Portfolio
		**  I could have put this data into a jekyll .yaml file and looped through it using liquid but using JS was quicker
		**  This could easily be MySql data if this site was in PHP
		***/
		var json = [{
		    "id" : "zolt",  
		    "title" 		: "Zolt",
			"description" 	: " <p>A startup company that has created the world\'s smallest, lightest laptop charger.<p>GoZolt collaborated with a local marketing team to create an e-commerce site built with Magento.</p><p>My responsibilities included Front End Development, taking PSD comps and implementing them to the Magento theme pages, as well as consulting on various design and functionality requests. I also implemented comps into the Wordpress/Magento integration utilizing the FishPig extension.</p>",
			"date" 			: "2015 - 2016",
			"tags"			: " <ul class=\"tags\"><li>Responsive Web Design</li><li>HTML</li><li>CSS</li><li>Jquery</li><li>Magento</li><li>Wordpress</li></ul>"
		},
		{
		    "id"			: "fpdatasolutions",
			"title" 		: "Focal Point Data Solutions",
			"description" 	: "<p>A service technology company providing data management, analytics and business intelligence solutions for hospital pharmacies.</p><p>The client requested a Front End solution for a static website buildout. Design mockups were provided by the client and the site was delivered using the Jekyll static site generator.</p>",
			"tags"			: "<ul class=\"tags\"><li>Responsive Web Design</li><li>HTML</li><li>CSS</li><li>Jquery</li><li>Jekyll</li></ul>",
			"date" 			: "2015", 
			"url" 			: "www.fpdatasolutions.com",

		},
		{
			"id"			: "thedancesocks",
			"title" 		: "The Dance Socks",
			"description" 	: "<p>A product that lets you dance using a sock that goes over your regular shoes.</p><p>This was a client that was migrating to the Magento e-commerce platform. I replicated their previous responsive ecommerce website using the Magento Responsive Web Design theme.</p>",
			"tags"			: "<ul class=\"tags\"><li>Responsive Web Design</li><li>HTML</li><li>CSS</li><li>Magento</li></ul>",
			"date" 			: "2014", 
			"url" 			: "www.thedancesocks.com",
		},
		{
			"id"			: "bsasi",
			"title" 		: "Bay State Alarm Security Integrators",
			"description" 	: "<p>BSA Security Integrators is a provider in professional security solutions for their customers ranging from small commercial systems to major industries.</p><p>The client was in need of a newer ecommerce website design and they provided a rough wireframe and company logo from which I was able to create a series of Photoshop comps. Once the comps were approved by the client, I implemented the comps into a fully custom designed Magento theme.</p>",
			"tags"			: "<ul class=\"tags\"><li>HTML</li><li>CSS</li><li>Magento</li><li>Photoshop</li></ul>",
			"date" 			: "2012", 
			"url" 			: "www.bsasi.com", 
		},
		{
			"id"			: "tribalhollywood",			
			"title" 		: "Tribal Hollywood",
			"description" 	: "<p>Tribal Hollywood is a Men's Jewelry store based out of Los Angeles, California. They specialize in selling designer men's jewelry and accessories.</p><p>Tribal Hollywood had a distinct look and feel that they wanted to maintain. Their emphasis was on targeting the night club, rockstar, trendy, party-goers.</p><p>Working closely with the client, my role was creating a set of wireframes and then a set of highly detailed Photoshop comps which was then implemented into a Magento theme by the development team. I also created the comps for the Scott Kay and King Baby jewelry lines to match their current design.</p><p>Other projects included creating an email form and specialty landing pages for marketing campaigns as well as instructions and support.</p>",
			"tags"			: "<ul class=\"tags\"><li>UI/UX Design</li><li>Graphic Design</li><li>Photoshop</li></ul>",
			"date" 			: "2012", 
			"url" 			: "www.tribalhollywood.com", 
		},
		{
			"id"			: "thebeamstore",
			"title" 		: "The Beam Store",
			"description" 	: "<p>The Beam Store is an international supplier and manufacturer of gymnastics and dance equipment based out of Oklahoma City. They have been operating since 2002 and have taken their business both online and internationally since then due to their success.</p><p>My role in this project was to take the newly designed company logo and redesign/replatform their site into a Magento Responsive Web Design. I used previously created moodboards to recreate the color scheme from their previous design in ProStores.</p>",
			"tags"			: "<ul class=\"tags\"><li>Responsive Web Design</li><li>HTML</li><li>CSS</li><li>Magento</li><li>Photoshop</li></ul>",
			"date" 			: "2012", 
			"url" 			: "www.thebeamstore.com",  
		},
		{
			"id"			: "thebeamstore",
			"title" 		: "The Beam Store",
			"description" 	: "<p>The Beam Store is an international supplier and manufacturer of gymnastics and dance equipment based out of Oklahoma City. They have been operating since 2002 and have taken their business both online and internationally since then due to their success.</p><p>My role in this project was to take the newly designed company logo and redesign/replatform their site into a Magento Responsive Web Design. I used previously created moodboards to recreate the color scheme from their previous design in ProStores.</p>",
			"tags"			: "<ul class=\"tags\"><li>Responsive Web Design</li><li>HTML</li><li>CSS</li><li>Magento</li><li>Photoshop</li></ul>",
			"date" 			: "2012", 
			"url" 			: "www.thebeamstore.com",  
		},
		{
		"id"			: "womenonguard",
		"title" 		: "Women on Guard",
		"description" 	: "<p>Women on Guard specializes in self defense and home protection products.</p><p>A migration to Magento project that required a redesign using the Magento Responsive Web Design theme.</p>",
		"tags"			: "<ul class=\"tags\"><li>Responsive Web Design</li><li>HTML</li><li>CSS</li><li>Magento</li><li>Photoshop</li></ul>",
		"date" 			: "2015", 
		"url" 			: "www.womenonguard.com", 
		},
		{
		"id"			: "neoverve",
		"title" 		: "Neoverve",
		"description" 	: "<p>A website redesign for the hosting company I work for.</p><p>A company rebranding project that included a logo design and UX comps designed with Adobe XD.</p><p>The idea was to rebrand as Neoverve introduced new hosting services such as FASTack OS. Emphasising the support role for Magento and other open souce CMS such as Wordpress, Drupal and Joomla.</p>",
		"tags"			: "<ul class=\"tags\"><li>Responsive Web Design</li><li>HTML</li><li>CSS</li><li>Jquery</li><li>Adobe XD</li><li>Photosh</li><li>Wordpress</li></ul>",
		"date" 			: "2016-17", 
		}
		];


		// create blank html container for Ajax content
		overlayProject.html(' ');  

		$('.item').on('click', function(){ 
			console.log($(this).attr('data-id'));
			var $this = $(this).attr('data-id');
			for(var i = 0; i < json.length; i++) {
				var obj = json[i];
				if($this == obj.id){
					console.log(obj.title);
					overlayProject.append('<div class="overlay-project-title"><h2>' + obj.title + '</h2>' + '</div>');
					if(obj.url){
						$('.overlay-project-title h2').append('<span><a href=//' + obj.url + ' target="_blank">' + obj.url + '</a></span>');
					}
					overlayProject.append('<p class="overlay-project-date">' + obj.date + '</p>');			
						
					overlayProject.append('<div class="overlay-project-main">');
					$('.overlay-project-main').append('<div class="overlay-project-description">' + obj.description + '</div>');
					overlayProject.append('<div class="overlay-project-tags">' + obj.tags + '</div>');

					if(obj.url){
						overlayProject.append('<div class="overlay-project-url"><a class="btn-default btn" href="//' + obj.url + '" target="_blank">View Site</a></div>');
					}
					if(obj.thumbnail_1){
					overlayProject.append('<div class="overlay-project-thumb" style="min-height: ' + obj.thumbnail_1.height + 'px">' + '<img src="' + obj.thumbnail_1.src + '" />' + '</div>');
					}
					if(obj.thumbnail_2){
					overlayProject.append('<div class="overlay-project-thumb">' + '<img src="' + obj.thumbnail_2 + '" />' + '</div>');
					}
					if(obj.thumbnail_3){
					overlayProject.append('<div class="overlay-project-thumb">' + '<img src="' + obj.thumbnail_3 + '" />' + '</div>');
					}
					
				}				
			}

			overlayResults.fadeIn(); 
			overlayResults.addClass('active'); 
		});
		

		$('.item').on('mouseover', function(){ 
			$(this).children('.item-overlay').stop().fadeIn(300, function(){}).css('display', 'flex');
		});

		$('.item').on('mouseout', function(){ 
			$(this).children('.item-overlay').stop().fadeOut(300);
		});

		// Close modal
		$('.overlay-results .overlay-close').on('click', function(){
			closeDetails();
		});


		function closeDetails(){
			overlayResults.fadeOut(100); 
			overlayProject.html(' ');  
			overlayProject.attr('id', '');
			
	    }

    	return false;
    }
    

    var bottomNavigationClick = function(){

    	var oneIsDone = false,
	        finish = function() {
	            // if both animations are done, set the flag to false
	            if(oneIsDone) {
	                isAnimating = false;
	            }
	            // at least one is done...
	            oneIsDone = true;
	        };

	    // gather all the initial scrollLeft positions of each section and put into an array
	    sectionsObject = {
	    	home: $('#home').offset().left,
	    	work: $('#work').offset().left,
	    	about: $('#about').offset().left,
	    	contact: $('#contact').offset().left,

	    }

	    $(window).on('resize', function(){
			sectionsObject = {
		    	home: $('#home').offset().left,
		    	work: $('#work').offset().left,
		    	about: $('#about').offset().left,
		    	contact: $('#contact').offset().left,

		    }
		    console.log(sectionsObject.work);
		});
    	
    	$('.bottom a').each(function(i){
    		$(this).on('click', function(e){
    			currentScrollPos = $('.site-wrapper-inner').scrollLeft();
    			
    			
    			var dataNav = $(this).attr("data-nav");

    			
    			var position = 0;
    			// get initial scroll left positions 
    			if(dataNav == 'home'){
    				position = 0
    			} else if(dataNav == 'work'){
    				position = sectionsObject.work
    			} else if(dataNav == 'about'){
    				position = sectionsObject.about
    			} else if(dataNav == 'contact'){
    				position = sectionsObject.contact
    			}
    			console.log(position);

	   			// animate the container to the right
				$('.site-wrapper-inner').animate({ 
					scrollLeft: position
					}, { duration: 1000, queue: false 
				});		

				if(position > currentScrollPos){
					currentSlide = i + 1;

					$('.bg-2').animate({
						'background-position-x': ('-='+position * 0.1) + 'px'}, 
						{ duration: 1000, queue: false 
					}, finish());
					$('.bg-1').animate({
						'background-position-x': ('-='+position * 0.05) + 'px'}, 
						{ duration: 1000, queue: false 
					}, finish());
				} else if(position == 0){
					console.log(sectionsObject.about, position, currentScrollPos);
					
						$('.bg-2').animate({
							'background-position-x': ('+='+windowWidth * 0.1) + 'px'}, 
							{ duration: 1000, queue: false 
						}, finish());
						$('.bg-1').animate({
							'background-position-x': ('+='+windowWidth * 0.05) + 'px'}, 
							{ duration: 1000, queue: false 
						}, finish());
					
					currentSlide = 1;
				} else {
					console.log(sectionsObject.about, position, currentScrollPos);
					currentSlide = i - 1;
					$('.bg-2').animate({
						'background-position-x': ('+='+position * 0.1) + 'px'}, 
						{ duration: 1000, queue: false 
					}, finish());
					$('.bg-1').animate({
						'background-position-x': ('+='+position * 0.05) + 'px'}, 
						{ duration: 1000, queue: false 
					}, finish());
				}
				
    		});
    	});

    	return false;
    }

    /***
    **	Run the app
    ***/

    run();


});