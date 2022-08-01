$(function () {

  let wWidth = $("body").outerWidth();

  //main화면 mousemove 이벤트
  const mainImg = $(".mainImg");

  mainImg.on("mousemove", e => {
    let posX = e.pageX;
    let posY = e.pageY;

    let bge1 = $(".bge1");
    let bge2 = $(".bge2");

    bge1.attr('style', `right:${20 - (posX / 30)}px; bottom:${20 - (posY / 30)}px`);
    bge2.attr('style', `left:${50 - (posX / 30)}px; top:${60 - (posY / 20)}px`);
  })

  //.search
  // const searchEl = $('.search');
  // const searchInput = $('.searchInput')

  // searchEl.on('click',function(){
  //   searchInput.focus();
  // })
  // searchInput.on('focus',function(){
  //   searchInput.attr('placeholder', '검색');
  //   if(wWidth >= 768){
  //     $('.searchimg').css('opacity',0);
  //   }
  // })
  // searchInput.on('blur',function(){
  //   searchInput.attr('placeholder', '');
  //   if(wWidth >= 768){
  //     $('.searchimg').css('opacity',1);
  //   }
  // })

  // //clock -> .timeInfo
  // $(".clock").on({
  //   click: function () {
  //     $(".timeInfo").slideToggle();
  //   },
  //   mouseenter: function () {
  //     $(".timeInfo").slideDown();
  //   },
  //   mouseleave: function () {
  //     $(".timeInfo").slideUp();
  //   }
  // })

  // //hamBtn
  // $(".hamBtn").on("click", function () {
  //   $(".mbMenu").css("left", "0");
  // })
  // $(".closeBtn").on("click", function () {
  //   $(".mbMenu").css("left", "-100%");
  // })

  // //모바일메뉴창
  // $(".mPagemenu>li").on('click',function(){
  //   $(".mbMenu").css("left", "-100%");
  // })

  


  //#exhibition 

  let exhiList = $(".exhibitionList");

  //pc슬라이드
  
  function initSize() {
    wWidth = $("body").outerWidth();
    var exPos = [0, 10, 20];
    var exSize = [100, 90, 80];
    var exZindex = [100, 10, 1];
    var exShow = 0;

    exhiList.eq(exShow).css("z-index", 0)

    for (i = 0; i < 3; i++) {
      console.log(i)
      exhiList.eq(i).css({
        "z-index": exZindex[i],
        "left": exPos[i] + "%",
        "height": exSize[i] + "%"
      });
    }
    if (wWidth >= 768) {
      
      $(".pager>.rightBtn").on("click", function () {
        
        exhiList = $(".exhibitionList");
        
        aa = exPos.pop();
        bb = exSize.pop();
        cc = exZindex.pop();
        exPos.unshift(aa);
        exSize.unshift(bb);
        exZindex.unshift(cc);
        console.log(exPos)
        console.log(exSize)
  
        exhiList.eq(exShow).css("z-index", 0)
        if (exShow >= 2) {
          exShow = 0;
        } else {
          exShow++;
        }
        console.log(exShow)
        
        for (i = 0; i < 3; i++) {
          console.log(i)
          exhiList.eq(i).css({
            "z-index": exZindex[i],
            "height": exSize[i] + "%"
          });
        }
        for (i = 0; i < 3; i++) {
          console.log(i)
          exhiList.eq(i).stop().animate({
            "left": exPos[i] + "%"
          }, 1000);
        }
        exhiList.children(".textWrap").removeClass('active');
        exhiList.eq(exShow).children(".textWrap").addClass('active');
      })
    }
    if (wWidth < 768) {
      exhiList.css("left",0);
      exhiList.children(".textWrap").removeClass('active');
      window.addEventListener('scroll', function () {
        console.log(window.scrollY);
        if (window.scrollY >= 100) {
          exhiList.eq(0).addClass('active').children(".textWrap").addClass('active')
        } else {
          exhiList.eq(0).removeClass('active').children(".textWrap").removeClass('active')
        }
        if (window.scrollY >= 350) {
          exhiList.eq(1).addClass('active').children(".textWrap").addClass('active')
        } else {
          exhiList.eq(1).removeClass('active').children(".textWrap").removeClass('active')
        }
        if (window.scrollY >= 500) {
          exhiList.eq(2).addClass('active').children(".textWrap").addClass('active')
        } else {
          exhiList.eq(2).removeClass('active').children(".textWrap").removeClass('active')
        }
      })
      
    }
    else {
      exhiList.eq(0).addClass('active').children(".textWrap").addClass('active');
    }
  }

  initSize();

  $(window).on("resize", function () {
    initSize();
  })



  //#program 슬라이드
  const pgContents = $(".programContents");
  let pgCount = pgContents.length;
  let curIndex = 0;
  // let timer = setInterval(moveSlide,1000);
  let prev = $(".prevBtn");
  let next = $(".nextBtn");

  $(".count").text(curIndex + 1);
  $(".total").text(pgCount);

  prev.on("click", function () {
    if (curIndex > 0) {
      curIndex--;
      $(".count").text(curIndex + 1);
    }
    pgContents.eq(curIndex).fadeIn(1000).siblings(".programContents").fadeOut(500);
  })

  next.on("click", function () {
    if (curIndex < 5) {
      curIndex++;
      $(".count").text(curIndex + 1);
    }
    pgContents.eq(curIndex).fadeIn(1000).siblings(".programContents").fadeOut(500)
  })

  // #museuminfo 아코디언 
  $(".infoList").on("click", function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next().removeClass('active');
    } else {
      $(this).addClass('active').next().addClass('active');
      $(this).siblings(".infoList").removeClass('active').next().removeClass('active');
    }
  })


  // //toTop
  // $(".topBtn").on("click",function(e){
  //   // e.preventDefault();
  //   $('html, body').stop().animate({
  //     scrollTop:0
  //   },700)

  // })

})