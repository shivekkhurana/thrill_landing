jQuery.fn.verticalAlign = function ()
{
    return this
            .css("margin-top",($(this).parent()
            .height() - $(this).height())/2 + 'px' )
};

$(function(){
	new WOW().init();
	
	var BV = new $.BigVideo({doLoop:true});
	BV.init();
	BV.show("assets/bg_video.mp4");

	BV.getPlayer().on('durationchange',function(){
	   $('#big-video-wrap').fadeIn();
	});


	$('.intro_text_container').css({height:$(window).height()-200 + "px"});
	$('#intro_text').verticalAlign();
	
});