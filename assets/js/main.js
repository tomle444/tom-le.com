$(document).ready(function(){
	
});

$(window).load(function(){
	$("html").hide();
        $("html").delay(250).fadeIn();  
        $(window).unload(function () {
            $("html").fadeOut();
        });
});

