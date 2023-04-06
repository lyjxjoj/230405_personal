let pageWrap = document.querySelectorAll(".container .sec");
let sec01top = pageWrap[0].offsetTop;
let sec02top = pageWrap[1].offsetTop;
let sec03top = pageWrap[2].offsetTop;
let sec04top = pageWrap[3].offsetTop;
let sec05top = pageWrap[4].offsetTop;
let sec06top = pageWrap[5].offsetTop;
let sec07top = pageWrap[6].offsetTop;
let sec08top = pageWrap[7].offsetTop;
let sec09top = pageWrap[8].offsetTop;
let sec10top = pageWrap[9].offsetTop;

let pageNumber = document.querySelectorAll(".pagination .num");
let stickyBtn = document.querySelector(".sticky_wrap .sticky_btn");
let header = document.querySelector(".wrap_header");
let pageNo = document.querySelector(".wrap_header .section_num");

// let pagenum2 = $(".pagination .num");
// pagenum2.on("click", function(){
//
// 	console.log($(this).index());
// })

/**
 * 페이지네이션 클릭 이벤트를 통해 스크롤위치 변경
 */
pageNumber.forEach(function (ele, i) {
  ele.addEventListener("click", function () {
    let pgeTop = pageWrap[i].offsetTop;
    window.scrollTo(0, pgeTop); // scrollTo => 지정위치로 스크롤 이동
  });
});

/**
 * 윈도우 스크롤 이벤트
 */
window.addEventListener("scroll", function () {
  let scrollValue = document.documentElement.scrollTop;
  scrollValue += document.documentElement.clientHeight / 2;

  if (scrollValue < sec02top) {
    pageWrap[0].classList.add("show");
    setPageno(1, "01");
    setStickyShow("on");
    fixedColor("wh");
  } else if (scrollValue >= sec02top && scrollValue < sec03top) {
    pageWrap[1].classList.add("show");
    setPageno(2, "02");
    setStickyShow("off");
    fixedColor("bk");
  } else if (scrollValue >= sec03top && scrollValue < sec04top) {
    pageWrap[2].classList.add("show");
    setPageno(3, "03");
    setStickyShow("off");
    fixedColor("wh");
  } else if (scrollValue >= sec04top && scrollValue < sec05top) {
    pageWrap[3].classList.add("show");
    setPageno(4, "04");
    setStickyShow("on");
    fixedColor("bk");
  } else if (scrollValue >= sec05top && scrollValue < sec06top) {
    pageWrap[4].classList.add("show");
    setPageno(5, "05");
    setStickyShow("off");
    fixedColor("wh");
  } else if (scrollValue >= sec06top && scrollValue < sec07top) {
    pageWrap[5].classList.add("show");
    setPageno(6, "06");
    setStickyShow("on");
    fixedColor("bk");
  } else if (scrollValue >= sec07top && scrollValue < sec08top) {
    pageWrap[6].classList.add("show");
    setPageno(7, "07");
    setStickyShow("on");
    fixedColor("wh");
  } else if (scrollValue >= sec08top && scrollValue < sec09top) {
    pageWrap[7].classList.add("show");
    setPageno(8, "08");
    setStickyShow("off");
    fixedColor("bk");
  } else if (scrollValue >= sec09top && scrollValue < sec10top) {
    pageWrap[8].classList.add("show");
    setPageno(9, "09");
    setStickyShow("on");
    fixedColor("wh");
  } else if (scrollValue >= sec10top) {
    pageWrap[9].classList.add("show");
    setPageno(10, "10");
    setStickyShow("off");
    fixedColor("bk");
  }
});

/**
 * 페이지네이션 숫자 변경되는 함수
 * @param num
 * 헤더 숫자 변경하는 함수
 * @param no
 */
function setPageno(num, no) {
  header.setAttribute("data-no", num);
  pageNo.innerHTML = no;
}

/**
 * 스티키버튼 끄고 켜는 함수
 * @param show
 */
function setStickyShow(show) {
  if (show == "on") {
    stickyBtn.parentElement.classList.add("show");
  } else if (show == "off" || stickyBtn.parentElement.contains("show")) {
    stickyBtn.parentElement.classList.remove("show");
  }
}

function fixedColor(col) {
  if (col == "wh") {
    header.classList.add("wh");
    header.classList.remove("bk");
  } else if (col == "bk") {
    header.classList.add("bk");
    header.classList.remove("wh");
  }
}

/**
 * 윈도우 로드시 실행
 */
window.addEventListener("load", function () {
  var event = new Event("scroll");
  window.dispatchEvent(event);
});

/**
 * 윈도우 리사이즈 이벤트
 */
window.addEventListener("resize", function () {
  sec01Top = secWrap[0].offsetTop;
  sec02Top = secWrap[1].offsetTop;
  sec03Top = secWrap[2].offsetTop;
  sec04Top = secWrap[3].offsetTop;
  sec05Top = secWrap[4].offsetTop;
  sec06Top = secWrap[5].offsetTop;
  sec07Top = secWrap[6].offsetTop;
  sec08Top = secWrap[7].offsetTop;
  sec09Top = secWrap[8].offsetTop;
  sec10Top = secWrap[9].offsetTop;
});
