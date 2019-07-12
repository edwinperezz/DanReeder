var images = [
	"/imgs/41-37.jpeg",
	"/imgs/41-50.jpeg",
	"/imgs/7-27.jpeg"
]
var time = 5000;
var i = 0;

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length -1){
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload = changeImg;