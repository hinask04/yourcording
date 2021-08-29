// JavaScript Document
	$('#slide').slick({
		autoplay: true,
		fade: true,
		pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
		focusOnSelect:true,
		speed: 1000
	});

//	$(window).on('load scroll', function(){
//  スクロールされた時にやりたいことをここに書く 
// })
	$(window).on("load scroll",function(e){
          const $main = $("main");
//		メニューの表示を開始させたい要素の上端
          const $fv = $(".fv");
		
          const $homeHeader = $("#header");
		
//		ページの一番上から指定したHTMLタグが何pxの距離に配置されているか
          const $fvHeight = $fv.outerHeight();
		
		
          const $scrollVal = $(window).scrollTop();
//  コンテンツにかぶってしまうとき→ const $navH = $(".header-inner").outerHeight();
if($(window).width()>768){
  if($scrollVal > $fvHeight){
      $homeHeader.addClass("m-fixed");
//   コンテンツにかぶってしまうとき→ $main.css("margin-top", $navH);
  }else{
    $homeHeader.removeClass("m-fixed");
	$main.css("margin-top",0); 
  }
};
		if($(window).width() <= 768){
			const $headerHeight = $homeHeader.outerHeight();
			if($scrollVal > $headerHeight){
				$("#scroll").addClass("scroll");
			}else{
				$("#scroll").removeClass("scroll");
			}
		}
});
		$(function(){
	$(".burger-btn").on('click',function(){
		$(".burger-btn").toggleClass("close");
		$(".header-nav").fadeToggle();
		$("body").toggleClass("noscroll");
	});
			
		$("a[href^='#']:not(.not_open)").on('click',function(){
			var speed = 500;
			var href=$(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			if($(window).width() <= 768){
				$(".burger-btn").toggleClass("close");
		        $(".header-nav").fadeToggle();
				$("body").removeClass("noscroll");
			};
    });
});