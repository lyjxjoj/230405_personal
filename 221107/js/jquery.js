let secNum = $(".section_num");
let stickyBtn = $(".sticky_wrap");
let header = $(".wrap_header")

// 페이지 변수
let sec02Scroll = $(".sec02").offset().top;
let sec03Scroll = $(".sec03").offset().top;
let sec04Scroll = $(".sec04").offset().top;
let sec05Scroll = $(".sec05").offset().top;
let sec06Scroll = $(".sec06").offset().top;
let sec07Scroll = $(".sec07").offset().top;
let sec08Scroll = $(".sec08").offset().top;
let sec09Scroll = $(".sec09").offset().top;
let sec10Scroll = $(".sec10").offset().top;

// 윈도우 리사이징 이벤트
$(window).on("resize", function(){
	sec02Scroll = $(".sec02").offset().top;
	sec03Scroll = $(".sec03").offset().top;
	sec04Scroll = $(".sec04").offset().top;
	sec05Scroll = $(".sec05").offset().top;
	sec06Scroll = $(".sec06").offset().top;
	sec07Scroll = $(".sec07").offset().top;
	sec08Scroll = $(".sec08").offset().top;
	sec09Scroll = $(".sec09").offset().top;
	sec10Scroll = $(".sec10").offset().top;
});

// 윈도우 스크롤 이벤트
$(window).on("scroll", function(){
	let scrollNow = $(document).scrollTop();
	scrollNow += $(".sec").innerHeight() / 2;

	if(scrollNow < sec02Scroll){
		$(".sec01").addClass("show");
		stickyOnOff("on");
		fixedColor("wh");
		pageNum("01");

	}else if(scrollNow >= sec02Scroll && scrollNow < sec03Scroll ){ // page 2
		$(".sec02").addClass("show");
		stickyOnOff("off");
		pageNum("02");

	}else if(scrollNow >= sec03Scroll && scrollNow < sec04Scroll ){ // page 3
		$(".sec03").addClass("show");
		stickyOnOff("on");
		fixedColor("bk");
		pageNum("03");

	}else if(scrollNow >= sec04Scroll && scrollNow < sec05Scroll ){ // page 4
		$(".sec04").addClass("show");
		stickyOnOff("on");
		pageNum("04");

	}else if(scrollNow >= sec05Scroll && scrollNow < sec06Scroll ){ // page 5
		$(".sec05").addClass("show");
		stickyOnOff("on");
		fixedColor("wh");
		pageNum("05");

	}else if(scrollNow >= sec06Scroll && scrollNow < sec07Scroll ){ // page 6
		$(".sec06").addClass("show");
		stickyOnOff("off");
		pageNum("06");

	}else if(scrollNow >= sec07Scroll && scrollNow < sec08Scroll ){ // page 7
		$(".sec07").addClass("show");
		stickyOnOff("on");
		fixedColor("wh");
		pageNum("07");

	}else if(scrollNow >= sec08Scroll && scrollNow < sec09Scroll ){ // page 8
		$(".sec08").addClass("show");
		stickyOnOff("on");
		pageNum("08");

	}else if(scrollNow >= sec09Scroll && scrollNow < sec10Scroll ){ // page 9
		$(".sec09").addClass("show");
		stickyOnOff("on");
		fixedColor("bk");
		pageNum("09");

	}else if(scrollNow >= sec10Scroll ){ // page 10
		$(".sec10").addClass("show");
		stickyOnOff("on");
		fixedColor("wh");
		pageNum("10");

	}
});

/**
 * 스티키버튼 끄고 켜는 함수 show
 * @param onoff
 */
function stickyOnOff(onoff){
	if(onoff == "on"){
		stickyBtn.addClass("show");
	}else if(onoff == "off"){
		stickyBtn.removeClass("show");
	}
};

/**
 * 스티키버튼 색상을 바꾸는 함수 bk, wh
 * @param bg
 */
function fixedColor(colr){
	if(colr == "bk"){
		header.addClass("bk");
		header.removeClass("wh");
	}else if(colr == "wh"){
		header.addClass("wh");
		header.removeClass("bk");
	}
};

/**
 * 페이지 넘버 변경하는 함수
 * @param num
 */
function pageNum(num){
	secNum.html(num);
};