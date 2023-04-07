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

var currentPageno = 0; // 현재 페이지 번호

/**
 * 페이지네이션 클릭 이벤트
 */
let pageScroll = document.querySelectorAll(".pagination .num");
pageScroll.forEach(function (ele, i) {
    if (i == 5) {
        ele.addEventListener("click", function () {
            alert("준비중입니다.");
        });
    } else {
        ele.addEventListener("click", function () {
            let secOffsetTop = secWrap[i].offsetTop;
            window.scrollTo(0, secOffsetTop);
            /*
				scrollTo : 부드럽게 움직이기 위해선
				css에서 html {scroll-begavior:smooth;를 적용함

				그러나 모바일 및 iOS에서 작동하지않아 js에서 직접 적용해야함
				window.scrollTo({top: 0, secOffsetTop, behavior: "smooth"});
			 */

            // let prev = document.querySelector(".pagination .num.current");
            // prev.classList.remove("current");
            // this.classList.add("current");
        });
    }
});

/**
 * 윈도우 스크롤 이벤트
 */
window.addEventListener("scroll", function () {
    let scrollNow = document.documentElement.scrollTop;
    scrollNow += document.documentElement.clientHeight / 2;

    if (scrollNow < sec02Scroll) {
        // page 1
        secWrap[0].classList.add("show");
        stickyColor("wh");
        pageNum(0);
    } else if (scrollNow >= sec02Scroll && scrollNow < sec03Scroll) {
        // page 2
        secWrap[1].classList.add("show");
        stickyColor("off");
        pageNum(1);
    } else if (scrollNow >= sec03Scroll && scrollNow < sec04Scroll) {
        // page 3
        secWrap[2].classList.add("show");
        stickyColor("bk");
        pageNum(2);
    } else if (scrollNow >= sec04Scroll && scrollNow < sec05Scroll) {
        // page 4
        secWrap[3].classList.add("show");
        stickyColor("bk");
        pageNum(3);
    } else if (scrollNow >= sec05Scroll && scrollNow < sec06Scroll) {
        // page 5
        secWrap[4].classList.add("show");
        stickyColor("wh");
        pageNum(4);
    } else if (scrollNow >= sec06Scroll && scrollNow < sec07Scroll) {
        // page 6
        secWrap[5].classList.add("show");
        stickyColor("off");
        pageNum(5);
    } else if (scrollNow >= sec07Scroll && scrollNow < sec08Scroll) {
        // page 7
        secWrap[6].classList.add("show");
        stickyColor("wh");
        pageNum(6);
    } else if (scrollNow >= sec08Scroll && scrollNow < sec09Scroll) {
        // page 8
        secWrap[7].classList.add("show");
        stickyColor("wh");
        pageNum(7);
    } else if (scrollNow >= sec09Scroll && scrollNow < sec10Scroll) {
        // page 9
        secWrap[8].classList.add("show");
        stickyColor("bk");
        pageNum(8);
    } else if (scrollNow >= sec10Scroll) {
        // page 10
        secWrap[9].classList.add("show");
        stickyColor("wh");
        pageNum(9);
    }
});

/**
 * 스티키버튼 끄고 켜는 함수 show
 * @param onoff
 */
// function stickyOnOff(onoff){
// 	if(onoff == "on"){
// 		stickyBtn.classList.add("show");
// 	}else if(onoff == "off"){
// 		stickyBtn.classList.remove("show");
// 	}
// };

/**
 * 스티키버튼 색상을 바꾸는 함수 bk, wh
 * @param bg
 */
function stickyColor(bg) {
    if (bg == "bk") {
        stickyBtn.classList.add("show");
        stickyBtn.classList.add("bk");
        stickyBtn.classList.remove("wh");
    } else if (bg == "wh") {
        stickyBtn.classList.add("show");
        stickyBtn.classList.add("wh");
        stickyBtn.classList.remove("bk");
    } else if (bg == "off") {
        stickyBtn.classList.remove("show");
    }
}

/**
 * 페이지 넘버 변경하는 함수
 * @param num
 */
function pageNum(num) {
    if (currentPageno !== num) {
        currentPageno = num;

        secNum.innerHTML = num < 9 ? "0" + (num + 1) : num + 1;

        var numText = "";
        if (num < 9) {
            numText = "0" + (num + 1);
        } else {
            numText = num + 1;
        }
        //secNum.innerHTML = numText;
        console.log(numText);

        console.log(num);
        let prev = document.querySelector(".pagination .num.current");
        prev.classList.remove("current");
        pageScroll[num].classList.add("current");
    }
}

/**
 * 윈도우 로드시 실행
 */
window.addEventListener("load", function () {
    var event = new Event("scroll"); // (*)
    window.dispatchEvent(event);
});

/**
 * 윈도우 리사이징 이벤트
 */
window.addEventListener("resize", function () {
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
