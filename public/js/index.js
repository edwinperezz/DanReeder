var images = [
	"/imgs/No.7-27.jpeg",
	"/imgs/No.41-50.jpeg",
	"/imgs/No.19-5.jpeg",
	"/imgs/No.7-51.jpeg",
	"/imgs/No.15-2.jpeg"
]
var time = 5000;
var i = 0;

function changeImg(){
	document.slide.src = images[i];
	var str = images[i].split("/");
	str = str[2].split(".",2);
	str = str.join(".");
	document.getElementById("img-title").innerHTML = str;
	if(i < images.length -1){
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload = changeImg;