var menu = document.querySelectorAll(".tab_menu .input");
var head = document.querySelectorAll(".tab_list .head a");
var tabList = document.querySelectorAll(".tab_list ul");

menu.forEach(function(ele, i){
	 var input_index = i;
	ele.addEventListener("click", function(){
		var inputId = this.getAttribute("id");
		var list = document.querySelector(".tab_list");
		list.setAttribute("data-tab", inputId);
	})
})

// menu.forEach(function(ele, i){
// 	var input_index = i;
// 	ele.addEventListener("click", function(){
// 		tabList.forEach(function(ele, j){
// 			ele.style.display = 'none';
// 		})
// 		tabList[input_index].style.display = 'block';
// 	})
// })


head.forEach(function(ele, i){
	ele.addEventListener("click", function(){
		var list = ele.closest("li");
		var content = list.querySelector(".body");
		var contClass = content.classList;

		if(contClass.contains("show") == true){
			contClass.remove("show");
		} else {
			contClass.add("show");
		}
	});
});

 //head.forEach((ele, i) => {ele.addEventListener ("click", (evt) => {console.log(evt);})});