$(function(){
    //.search
  const searchEl = $('.search');
  const searchInput = $('.searchInput')

  searchEl.on('click',function(){
    searchInput.focus();
  })
  searchInput.on('focus',function(){
    searchInput.attr('placeholder', '검색');
    if(wWidth >= 768){
      $('.searchimg').css('opacity',0);
    }
  })
  searchInput.on('blur',function(){
    searchInput.attr('placeholder', '');
    if(wWidth >= 768){
      $('.searchimg').css('opacity',1);
    }
  })

  //clock -> .timeInfo
  $(".clock").off('click').on('click',function(){
    $('.timeInfo').slideToggle();
  })


  //hamBtn
  $(".hamBtn").on("click", function () {
    $(".mbMenu").css("left", "0");
  })
  $(".closeBtn").on("click", function () {
    $(".mbMenu").css("left", "-100%");
  })

  //모바일메뉴창
  $(".mPagemenu>li").on('click',function(){
    $(".mbMenu").css("left", "-100%");
  })


  //toTop
  $(".topBtn").on("click",function(e){
    // e.preventDefault();
    $('html, body').stop().animate({
      scrollTop:0
    },700)

  })

})