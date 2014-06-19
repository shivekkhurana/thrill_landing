jQuery.fn.verticalAlign = function ()
{
    return this
            .css("margin-top",($(this).parent()
            .height() - $(this).height())/2 + 'px' )
};

$(function(){
	var BV = new $.BigVideo({doLoop:true});
	BV.init();
	BV.show("assets/bg_video.mp4");

	$("#loader").verticalAlign();

	BV.getPlayer().on('durationchange',function(){
		$("#loader").fadeOut(0);
		$('#big-video-wrap').fadeIn();
		$('#container').fadeIn(0);
		new WOW().init();
	});


	$('.intro_text_container').css({height:$(window).height()-200 + "px"});
	$('#intro_text').verticalAlign();

});