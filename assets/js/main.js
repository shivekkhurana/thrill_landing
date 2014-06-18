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

	$('.description').verticalAlign();
});