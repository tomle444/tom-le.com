$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').delay(550).fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(950).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(950).css({'overflow':'visible'});
})