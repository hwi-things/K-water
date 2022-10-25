if (jQuery.browser.mobile == true) {
  // console.log('mobile');
  location.href = "./mobile/";
}
// console.log(location.href);

// fullpage

$(function () {
  $("#fullpage").fullpage({
    navigation: true,
    navigationPosition: "right",
    anchors: ["slide1", "slide2", "slide3", "slide4", "slide5", "slide6"],
  });
});

$(function () {
  /* **
   1. 변수 선언
    * */
  var visualWrap = $(".c1_center"),
    slide = visualWrap.find(".c1_slide>li"),
    slideCount = slide.length,
    stopTimer,
    leftBtn = visualWrap.find(".c1_slide_btn>.prev"),
    rightBtn = visualWrap.find(".c1_slide_btn>.next"),
    stopBtn = visualWrap.find(".c1_slide_btn>.stop"),
    pager = visualWrap.find(".buttonList>li"),
    current = 0;
  /* **
   2. 슬라이드 위치 설정
   * */
  var slidePos = slide.each(function (i) {
    $(this).css("left", i * 100 + "%");
  });

  /* **
   슬라이드 이미지부분- setinterval
   슬라이드 인덱스 번호를 반환
   * */

  timer();

  /* *
   * autoplay 함수
   * */

  function timer() {
    stopTimer = setInterval(function () {
      var prev = slide.eq(current);
      move(prev, 0, "-100%");
      var prevPager = pager.eq(current); //0
      prevPager.removeClass("on");
      current++; //1
      if (current == slideCount) {
        current = 0;
      }
      var next = slide.eq(current); //1
      move(next, "100%", "0%");
      var nextPager = pager.eq(current); //0
      nextPager.addClass("on");
      cnt(current);
    }, 4000);
  }

  /* **
   슬라이드 애니메이트
   * */
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000, "easeInOutCirc");
  }

  /* **
       좌우 버튼 UI 추가 
        * */

  rightBtn.click(function () {
    var prev = slide.eq(current); //0
    move(prev, 0, "-100%");
    var prevPager = pager.eq(current); //0
    prevPager.removeClass("on");

    current++; //1
    if (current == slideCount) {
      current = 0;
    }
    var next = slide.eq(current); //1
    move(next, "100%", "0%");
    var nextPager = pager.eq(current); //0
    nextPager.addClass("on");
    cnt(current);
  });
  leftBtn.click(function () {
    var prev = slide.eq(current); //0
    move(prev, 0, "100%"); //slide.eq(0),0,100%
    var prevPager = pager.eq(current); //0
    prevPager.removeClass("on");

    current--; //1
    if (current < 0) {
      current = slideCount - 1;
    }
    var next = slide.eq(current); //1
    move(next, "-100%", "0%");
    var nextPager = pager.eq(current); //0
    nextPager.addClass("on");
    cnt(current);
  });
  stopBtn.hover(
    function () {
      $(this).addClass("on");
      clearInterval(stopTimer);
    },
    function () {
      $(this).removeClass("on");
      timer();
    }
  );

  /* **
       카운터 동적생성 
        * */
  var counterEl = "<h1 class='counter'>1";
  $("#wrap").append(counterEl);
  var counter = $(".counter");
  function cnt(n) {
    counter.html(n + 1);
  }
});
