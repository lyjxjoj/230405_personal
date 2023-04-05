let secWrap = document.querySelectorAll(".sec");
let secNum = document.querySelector(".section_num");
let stickyBtn = document.querySelector(".sticky_wrap");

// 페이지 변수
let sec02Scroll = secWrap[1].offsetTop;
let sec03Scroll = secWrap[2].offsetTop;
let sec04Scroll = secWrap[3].offsetTop;
let sec05Scroll = secWrap[4].offsetTop;
let sec06Scroll = secWrap[5].offsetTop;
let sec07Scroll = secWrap[6].offsetTop;
let sec08Scroll = secWrap[7].offsetTop;
let sec09Scroll = secWrap[8].offsetTop;
let sec10Scroll = secWrap[9].offsetTop;


// 윈도우 리사이징 이벤트
window.addEventListener("resize", function(){
	// 리사이즈된 윈도우 창 크기 불러오기
	// console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)

	sec01Scroll = secWrap[0].offsetTop;
	sec02Scroll = secWrap[1].offsetTop;
	sec03Scroll = secWrap[2].offsetTop;
	sec04Scroll = secWrap[3].offsetTop;
	sec05Scroll = secWrap[4].offsetTop;
	sec06Scroll = secWrap[5].offsetTop;
	sec07Scroll = secWrap[6].offsetTop;
	sec08Scroll = secWrap[7].offsetTop;
	sec09Scroll = secWrap[8].offsetTop;
	sec10Scroll = secWrap[9].offsetTop;
});

// 윈도우 스크롤 이벤트
window.addEventListener("scroll", function(){
	let scrollNow = document.documentElement.scrollTop;
	scrollNow += document.documentElement.clientHeight / 2;

	if(scrollNow < sec02Scroll){  // page 1
		secWrap[0].classList.add("show");
		stickyOnOff("on");
		stickyColor("wh");
		pageNum("01");

	}else if(scrollNow >= sec02Scroll && scrollNow < sec03Scroll ){ // page 2
		secWrap[1].classList.add("show");
		stickyOnOff("off");
		pageNum("02");

	}else if(scrollNow >= sec03Scroll && scrollNow < sec04Scroll ){ // page 3
		secWrap[2].classList.add("show");
		stickyOnOff("on");
		stickyColor("bk");
		pageNum("03");

	}else if(scrollNow >= sec04Scroll && scrollNow < sec05Scroll ){ // page 4
		secWrap[3].classList.add("show");
		stickyOnOff("on");
		pageNum("04");

	}else if(scrollNow >= sec05Scroll && scrollNow < sec06Scroll ){ // page 5
		secWrap[4].classList.add("show");
		stickyOnOff("on");
		stickyColor("wh");
		pageNum("05");

	}else if(scrollNow >= sec06Scroll && scrollNow < sec07Scroll ){ // page 6
		secWrap[5].classList.add("show");
		stickyOnOff("off");
		pageNum("06");

	}else if(scrollNow >= sec07Scroll && scrollNow < sec08Scroll ){ // page 7
		secWrap[6].classList.add("show");
		stickyOnOff("on");
		stickyColor("wh");
		pageNum("07");

	}else if(scrollNow >= sec08Scroll && scrollNow < sec09Scroll ){ // page 8
		secWrap[7].classList.add("show");
		stickyOnOff("on");
		pageNum("08");

	}else if(scrollNow >= sec09Scroll && scrollNow < sec10Scroll ){ // page 9
		secWrap[8].classList.add("show");
		stickyOnOff("on");
		stickyColor("bk");
		pageNum("09");

	}else if(scrollNow >= sec10Scroll ){ // page 10
		secWrap[9].classList.add("show");
		stickyOnOff("on");
		stickyColor("wh");
		pageNum("10");

	}
});


/**
 * 스티키버튼 끄고 켜는 함수 show
 * @param onoff
 */
function stickyOnOff(onoff){
	if(onoff == "on"){
		stickyBtn.classList.add("show");
	}else if(onoff == "off"){
		stickyBtn.classList.remove("show");
	}
};

/**
 * 스티키버튼 색상을 바꾸는 함수 bk, wh
 * @param bg
 */
function stickyColor(bg){
	if(bg == "bk"){
		stickyBtn.classList.add("bk");
		stickyBtn.classList.remove("wh");
	}else if(bg == "wh"){
		stickyBtn.classList.add("wh");
		stickyBtn.classList.remove("bk");
	}
};

/**
 * 페이지 넘버 변경하는 함수
 * @param num
 */
function pageNum(num){
	secNum.innerHTML = num;
};



/*
	윈도우 스크롤 이벤트를 생성 후
	페이지의 배열을 불러와서 요소, 인덱스를 이용해
	스크롤 이벤트를 주는것.

	하지만 해당 인덱스마다 모든 스크롤변수를 불러와야하는 것이
	불필요한 움직임이 많아 사용에 좋지않음
*/

// $(window).on('scroll', function(){
// 	let scrollNow = document.documentElement.scrollTop;
//
// 	secWrap.forEach(function(ele, i){
// 		var eleTop = ele.offsetTop;
// 		var eleHeight = ele.offsetHeight;
// 		var eleBottom = eleTop + eleHeight;
//
// 		console.log(ele, eleTop);
//
// 		if(scrollNow > eleTop && scrollNow <= eleBottom){
// 			secNum.innerHTML = "0" + i;
// 		}
// 	});
// });


// // elem.getBoundingClientRect().x : 현재 창기준 x좌표
// // elem.getBoundingClientRect().y : 현재 창기준 y좌표
// // elem.getBoundingClientRect().width : 엘리먼트 가로
// // elem.getBoundingClientRect().height : 엘리먼트 세로
// // elem.getBoundingClientRect().top : 현재 창기준 세로 시작점 부터 엘리먼트 윗변 까지의 거리
// // elem.getBoundingClientRect().left : 현재 창기준 가로 시작점 부터 엘리먼트 왼쪽변 까지의 거리
// // elem.getBoundingClientRect().right : 현재 창기준 가로 시작점 부터 엘리먼트 오른쪽변 까지의 거리
// // elem.getBoundingClientRect().bottom : 현재 창기준 세로 시작점 부터 엘리먼트 아래변 까지의 거리