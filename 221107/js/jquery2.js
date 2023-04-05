let pageWrap = $(".container .sec");
let pageNumber = $(".pagination .num");
let secNum = $(".section_num");
let stickyBtn = $(".sticky_wrap .sticky_btn");
let header = $(".wrap_header");
let pageNo = $(".wrap_header .section_num");

// 페이지 변수
let sec02Top = $(pageWrap).eq(1).offset().top;
let sec03Top = $(pageWrap).eq(2).offset().top;
let sec04Top = $(pageWrap).eq(3).offset().top;
let sec05Top = $(pageWrap).eq(4).offset().top;
let sec06Top = $(pageWrap).eq(5).offset().top;
let sec07Top = $(pageWrap).eq(6).offset().top;
let sec08Top = $(pageWrap).eq(7).offset().top;
let sec09Top = $(pageWrap).eq(8).offset().top;
let sec10Top = $(pageWrap).eq(9).offset().top;




let sectionTop = {
	sec01Top : 0,
	sec02Top : 0,
	sec03Top : 0,
	sec04Top : 0,
	sec05Top : 10,
	sec06Top : 0,
	sec07Top : 0,
	sec08Top : 0,
	sec09Top : 0,
	sec10Top : 0,
};
sectionTop["sec01Top"] = 999
sectionTop.sec01Top = 7877
console.log(sectionTop["sec01Top"]);
console.log(sectionTop.sec01Top);



function pagePos(){
	$(pageWrap).each(function (index, item) {
		let name = "";

		if(index < 9){
			name = "sec0" + (index + 1) + "Top"
		}else{
			name = "sec" + (index + 1) + "Top"
		}
		sectionTop[name] = $(pageWrap).eq(index).offset().top;

	})
}
pagePos();

// `sec${index}Top`

/**
 * 페이지네이션 클릭 이벤트를 통해 스크롤위치 변경
 */
$(pageNumber).on("click", function(){
	let pgeNo = $(this).index();
	let pgeTop = $(pageWrap).eq(pgeNo).offset().top;

	$("html").animate({scrollTop: pgeTop}, 500);
})


/**
 * 윈도우 스크롤 이벤트
 */
$(window).on("scroll", function(){
	let scrollValue = $(document).scrollTop();
	scrollValue += $(".sec").innerHeight() / 2;

	if(scrollValue < sectionTop.sec02Top){
		pageWrap.eq(0).addClass("show");
		setPageno(1, "01");
		setStickyShow("on");
		fixedColor("wh");

	}else if(scrollValue >= sectionTop.sec02Top && scrollValue < sec03Top){
		pageWrap.eq(1).addClass("show");
		setPageno(2, "02");
		setStickyShow("off");
		fixedColor("bk");

	}else if(scrollValue >= sec03Top && scrollValue < sec04Top){
		pageWrap.eq(2).addClass("show");
		setPageno(3, "03");
		setStickyShow("on");
		fixedColor("wh");

	}else if(scrollValue >= sec04Top && scrollValue < sec05Top){
		pageWrap.eq(3).addClass("show");
		setPageno(4, "04");
		setStickyShow("off");
		fixedColor("bk");

	}else if(scrollValue >= sec05Top && scrollValue < sec06Top){
		pageWrap.eq(4).addClass("show");
		setPageno(5, "05");
		setStickyShow("off");
		fixedColor("wh");

	}else if(scrollValue >= sec06Top && scrollValue < sec07Top){
		pageWrap.eq(5).addClass("show");
		setPageno(6, "06");
		setStickyShow("on");
		fixedColor("bk");

	}else if(scrollValue >= sec07Top && scrollValue < sec08Top){
		pageWrap.eq(6).addClass("show");
		setPageno(7, "07");
		setStickyShow("off");
		fixedColor("wh");

	}else if(scrollValue >= sec08Top && scrollValue < sec09Top){
		pageWrap.eq(7).addClass("show");
		setPageno(8, "08");
		setStickyShow("on");
		fixedColor("bk");

	}else if(scrollValue >= sec09Top && scrollValue < sec10Top){
		pageWrap.eq(8).addClass("show");
		setPageno(9, "09");
		setStickyShow("off");
		fixedColor("wh");

	}else if(scrollValue >= sec10Top){
		pageWrap.eq(9).addClass("show");
		setPageno(10, "10");
		setStickyShow("on");
		fixedColor("bk");

	}
})

/**
 * 페이지네이션 숫자 변경되는 함수
 * @param num
 * 헤더 숫자 변경하는 함수
 * @param no
 */
function setPageno(num, no){
	$(header).attr("data-no", num);
	$(pageNo).text(no);
}

$(this).siblings();

/**
 * 스티키버튼 끄고 켜는 함수
 * @param show
 */
function setStickyShow(show){
	if(show == "on"){
		$(stickyBtn).parent().addClass("show");
	}else if(show == "off" || stickyBtn.parent().hasClass("show")){
		$(stickyBtn).parent().removeClass("show");
	}
}

function fixedColor(col){
	if(col == "wh"){
		$(header).addClass("wh");
		$(header).removeClass("bk");
	}else if(col == "bk"){
		$(header).addClass("bk");
		$(header).removeClass("wh");
	}
}


/**
 * 윈도우 로드시 실행
 */
$(window).addClass("load", function(){
	var event = new Event("scroll");
	window.dispatch(event);
})


/**
 * 윈도우 리사이징 이벤트
 */
$(window).on("resize", function(){
	sec02Top = $(pageWrap).eq(1).offset().top;
	sec03Top = $(pageWrap).eq(2).offset().top;
	sec04Top = $(pageWrap).eq(3).offset().top;
	sec05Top = $(pageWrap).eq(4).offset().top;
	sec06Top = $(pageWrap).eq(5).offset().top;
	sec07Top = $(pageWrap).eq(6).offset().top;
	sec08Top = $(pageWrap).eq(7).offset().top;
	sec09Top = $(pageWrap).eq(8).offset().top;
	sec10Top = $(pageWrap).eq(9).offset().top;

	pagePos();
});