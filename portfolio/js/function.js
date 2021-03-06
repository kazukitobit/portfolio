$(document).ready(function(){
// Sticky Header　０より下にスクロールした際にSTICKYクラスを追加する
  $(window).on('scroll',function() {
  	var h = 0;

      if ($(window).scrollTop() > h) {
          $('.main_header').addClass('sticky');
      } else {
          $('.main_header').removeClass('sticky');
      }
  });
	/*Mobile Navigation
	$('#toggleMenu').on('click',function() {
		if ($('.main_header').hasClass('open-nav')) {
			$('.main_header').removeClass('open-nav');
		} else {
			$('.main_header').addClass('open-nav');
		}
	});*/

  // navigation scroll　メニューのスクロールアニメーション
  $('li a').on('click',function(event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top ;//セクションに戻る
    $('html, body').animate({
        scrollTop: target//
    }, 500);
    event.preventDefault();//エラー対策
  });
  /* Scroll-to-Top Button　背景画像の切り替え */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {/*上から100移動した際に発動*/
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();/*それ以外の場合は背景を隠す*/
    }
  });
  $('.scrollup').on('click',function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
  }); 
  
 /*ハンバーガーのアニメーション*/
 $(function(){
    $('.menu-ber').on('click',function(){  /*バーガーメニューをクリックしたら発動*/
        if($('.burger').hasClass('active')){  /*バーガーに対してアクティブがあるかチェックする*/
          $('.burger').removeClass('active');/*バーガーがあった場合、アクティブを消す*/  
        }else{
          $('.burger').addClass('active');/*アクティブを追加する*/
        }
    });
 });
 // メニューの表示
  $(function(){
    $(".menu-ber").click(function(){
        $(".menu_nav").slideToggle(200);
    });
    /* リンクを１度クリックすると非表示になる
    $(".menu_nav ul li a").click(function(){
        $(".menu_nav").css({display:"none"});
    });*/

    $(".menu-ber").click(function(){
      event.stopPropagation();
    });
    $(document).click(function(event){
      if (!$(event.target).closest('.menu_nav').length) {
        $('.menu_nav').slideUp(200);
      }
    });
  });
  



  /*スキルを表示するアニメ*/
  $(function(){

    var skill = $('.skill');
    skill.hide();
    //スクロールが200に達したらボタン表示
    $(window).scroll(function(){
      if ($(this).scrollTop() > 2200){
        //繰り返し処理
        skill.each(function(i){
          //遅延させてフェードイン
          $(this).delay(200 * i).fadeIn(1000);
          });
      } else {
        skill.fadeOut();
         
      }
    });

  /*  skill.click(function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);  
    });*/
  });


  $(function(){
      $('.js-modal-open').each(function(){
          $(this).on('click',function(){
              var target = $(this).data('target');
              var modal = document.getElementById(target);
              $(modal).fadeIn();
              return false;
          });
      });
      $('.js-modal-close').on('click',function(){
          $('.js-modal').fadeOut();
          return false;
      }); 
  });
});