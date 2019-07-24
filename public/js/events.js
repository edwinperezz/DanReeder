var imgs = document.getElementsByClassName("gallery-img");

var limitPerPage = 10; 
var totalPages = Math.ceil((imgs.length)/limitPerPage);

$(".gallery-img:gt("+ (limitPerPage-1)+ ")").hide();


for(var i = 1; i <= totalPages; i++){
	$(".pagination").append("<a href='javascript:void(0)' class='current-page'>"+i+"</a>");
}
document.getElementsByClassName("current-page")[0].classList.add("active");
$(".pagination").append("<a href='javascript:void(0)' id='next-page'>&raquo;</a>");
$(".current-page").on("click", function(){
	if($(this).hasClass("active")){
		return false;
	} else {
		var currentPage = $(this).index();
		$(".pagination a").removeClass("active");
		$(this).addClass("active");
		$(".gallery-img").hide();
		var grandTotal = currentPage * limitPerPage;
		for(var i = (grandTotal-limitPerPage); i < grandTotal; i++){
			$(".gallery-img:eq("+ i + ")").show();
		}
	}
});
$("#next-page").on("click", function(){
	var currentPage = $(".pagination a.active").index();
	if(currentPage===totalPages){
		return false;
	} else{
		currentPage++;
		$(".pagination a").removeClass("active");
		$(".gallery-img").hide();
		var grandTotal = currentPage * limitPerPage;
		for(var i = (grandTotal-limitPerPage); i < grandTotal; i++){
			$(".gallery-img:eq("+ i + ")").show();
		}
		document.getElementsByClassName("current-page")[currentPage-1].classList.add("active");

	}
});
$("#previous-page").on("click", function(){
	var currentPage = $(".pagination a.active").index();
	if(currentPage===1){
		return false;
	} else{
		currentPage--;
		$(".pagination a").removeClass("active");
		$(".gallery-img").hide();
		var grandTotal = currentPage * limitPerPage;
		for(var i = (grandTotal-limitPerPage); i < grandTotal; i++){
			$(".gallery-img:eq("+ i + ")").show();
		}
		document.getElementsByClassName("current-page")[currentPage-1].classList.add("active");
	}
});