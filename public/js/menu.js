$("#drop-down").click(function(){
	$(".drop-down-menu").toggleClass("hidden");
	$(".drop-down-menu").toggleClass("visible");
	$(".blank").toggleClass("h2");
	$(".blank").toggleClass("v2");
	$("#drop-down").toggleClass("on");
	$("#drop-down").toggleClass("off");
});
$(".photos-menu").click(function(){
	$(".photo-options").toggleClass("open");
})

$(document).ready(function(){
	$("#loading").delay($("#loading").attr("delay-hide")).fadeOut();
});