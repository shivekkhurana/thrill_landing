jQuery.fn.verticalAlign = function ()
{
    return this
            .css('margin-top',($(this).parent()
            .height() - $(this).height())/2 + 'px' )
};

function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();
	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(function(){
	var BV = new $.BigVideo({doLoop:true});
	BV.init();
	BV.show('assets/bg_video.mp4');

	$('#loader').verticalAlign();

	BV.getPlayer().on('durationchange',function(){
		$('#loader').fadeOut(0);
		$('#big-video-wrap').fadeIn();
		$('#container').fadeIn(0);
	});

	$(window).scroll(function() {    
		if(isScrolledIntoView($('#screens')))
		{
			$('#screens').addClass("animated fadeInUpBig").bjqs({
				'height' : $(window).height() + 'px',
				'width' : $(window).width() + 'px',
				'responsive' : true,
				animspeed : 3000,
				showcontrols : false,
				showmarkers : false,
				hoverpause : false,
				randomstart : false
			});
		}
	});

	$('.intro_text_container').css({height:$(window).height()-200 + 'px'});
	$('#intro_text').verticalAlign();
	
});