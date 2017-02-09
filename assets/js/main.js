$(document).ready(function(){
	$("html").hide();
});

$(window).load(function(){	
        $("html").delay(450).fadeIn();
        $(window).unload(function () {
            $("html").fadeOut();
        });
});

