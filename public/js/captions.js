
$(document).ready(function(){
	function checkWidth(){
		if($(window).width()>800){
			var captions = document.getElementsByClassName("caption");
			for(var i = 0; i < captions.length; i++){
				captions[i].addEventListener("click",function(){
					this.classList.toggle("caption");
					this.classList.toggle("caption-popup");
					$(".blank").toggleClass("h2");
					$(".blank").toggleClass("v2");
				});
			}
		} else{
			var captions = document.getElementsByClassName("caption");
			for(var i = 0; i < captions.length; i++){
				captions[i].removeEventListener("click",function(){
				});
			}
		}
	}
	checkWidth();
	$(window).resize(checkWidth);
});