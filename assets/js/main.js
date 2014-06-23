jQuery.fn.verticalAlign = function ()
{
    return this
            .css('margin-top',($(this).parent()
            .height() - $(this).height())/2 + 'px' )
};


$(function(){
	var BV = new $.BigVideo({doLoop:true});
	BV.init();
	BV.show('assets/bg_video.mp4');

	$('#loader').verticalAlign();

	BV.getPlayer().on('durationchange',function(){
		$('#loader').fadeOut(0);
		$('#big-video-wrap').fadeIn();
		$('.intro_text_container').addClass("animated fadeInUp");
	});

	$('.intro_text_container').css({
		"margin-top":($(window).height()/2) - 60 + 'px',
		"margin-bottom":($(window).height()/2) - 60 + 'px'
	});

	$('#intro_text').verticalAlign();
	

	var s = skrollr.init({
		forceHeight:true
	});

	//$('#screens').css({"margin-top":$(".intro_text_container").height() + 'px'})

});