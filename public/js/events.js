var imgs = document.getElementsByClassName("gallery-img");

var limitPerPage = 10; 
var totalPages = Math.ceil((imgs.length)/limitPerPage);

$(".gallery-img:gt("+ (limitPerPage-1)+ ")").hide();


for(var i = 1; i <= totalPages; i++){
	$(".page-nums").append("<a href='javascript:void(0)' class='current-page'>"+i+"</a>");
}
document.getElementsByClassName("current-page")[0].classList.add("active");
// $(".pages").append("<a href='javascript:void(0)' id='next-page'>&raquo;</a>");
$(".current-page").on("click", function(){
	if($(this).hasClass("active")){
		return false;
	} else {
		var currentPage = $(this).index();
		currentPage++;
		$(".page-nums a").removeClass("active");
		$(this).addClass("active");
		$(".gallery-img").hide();
		var grandTotal = currentPage * limitPerPage;
		for(var i = (grandTotal-limitPerPage); i < grandTotal; i++){
			$(".gallery-img:eq("+ i + ")").show();
		}
		var page = $(".current-page")[currentPage-1];
		page.parentNode.scrollLeft = (page.offsetLeft - page.parentNode.offsetLeft);
	}
});
$("#next-page").on("click", function(){
	var currentPage = $(".page-nums a.active").index();
	currentPage++;
	if(currentPage===totalPages){
		return false;
	} else{
		currentPage++;
		$(".page-nums a").removeClass("active");
		$(".gallery-img").hide();
		var grandTotal = currentPage * limitPerPage;
		for(var i = (grandTotal-limitPerPage); i < grandTotal; i++){
			$(".gallery-img:eq("+ i + ")").show();
		}
		document.getElementsByClassName("current-page")[currentPage-1].classList.add("active");
		var page = $(".current-page")[currentPage-1];
		page.parentNode.scrollLeft = (page.offsetLeft - page.parentNode.offsetLeft);

	}
});
$("#previous-page").on("click", function(){
	var currentPage = $(".page-nums a.active").index();
	currentPage++;
	if(currentPage===1){
		return false;
	} else{
		currentPage--;
		$(".page-nums a").removeClass("active");
		$(".gallery-img").hide();
		var grandTotal = currentPage * limitPerPage;
		for(var i = (grandTotal-limitPerPage); i < grandTotal; i++){
			$(".gallery-img:eq("+ i + ")").show();
		}
		document.getElementsByClassName("current-page")[currentPage-1].classList.add("active");
		var page = $(".current-page")[currentPage-1];
		page.parentNode.scrollLeft = (page.offsetLeft - page.parentNode.offsetLeft);
	}
});