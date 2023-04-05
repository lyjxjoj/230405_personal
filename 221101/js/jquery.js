var $menu = $(".tab_menu .input");
var $head = $(".tab_list .head a");
var $tabList = $(".tab_list");

// $menu.each(function(i, ele){ // i인덱스, ele요소
// 	$(this).on("click", function(){
// 		var inputId = $(this).attr("id");
// 		tabList.attr("data-tab", inputId);
// 	});
// });

// $menu.on("click", function(){
// 	$tabList.attr("data-tab", $(this).attr("id"));
// })
//
// $head.on("click", function(i){
// 	// var body = $(this).siblings(".body");
// 	// body.toggleClass("show");
// 	$(this).parent().next().toggleClass("show");
// })


// 4줄로 줄이기

$(".tab_menu .input").on("click", function(){
	$(".tab_list").attr("data-tab", $(this).attr("id"));
})

$(".tab_list .head a").on("click", function(i){
	$(this).parent().next().toggleClass("show");
})


