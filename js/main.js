"use strict";

// $(document).ready(function() {
//   // ページ読み込み時に .about-wrap__block__bottom__left__img と .about-wrap__block__bottom__right__img に初期背景サイズを設定
//   $('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css('background-size', '100%');

//   // .about-wrap__block__bottom__left__img__txt と .about-wrap__block__bottom__right__img__txt にホバーイベントを設定
//   $('.about-wrap__block__bottom__left__img__txt, .about-wrap__block__bottom__right__img__txt').hover(
//     function() {
//       // ホバーされたときに親の .about-wrap__block__bottom__left__img または .about-wrap__block__bottom__right__img の背景画像を拡大
//       $(this).closest('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css('background-size', '120%');
//     },
//     function() {
//       // ホバーが外れたときに元の背景サイズに戻す
//       $(this).closest('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css('background-size', '100%');
//     }
//   );
// });

// $(document).ready(function() {
//   // .about-wrap__block__bottom__left__img と .about-wrap__block__bottom__right__img に初期状態を設定
//   $('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css({
//     'background-size': 'cover',
//     'background-position': 'center',
//     'transition': 'transform 0.4s' // 初期状態でのトランジション設定
//   });

//   // .about-wrap__block__bottom__left__img__txt と .about-wrap__block__bottom__right__img__txt にホバーイベントを設定
//   $('.about-wrap__block__bottom__left__img__txt, .about-wrap__block__bottom__right__img__txt').hover(
//     function() {
//       // ホバーされたときに親の .about-wrap__block__bottom__left__img または .about-wrap__block__bottom__right__img のスケールを拡大
//       $(this).closest('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css('transform', 'scale(1.1)');
//     },
//     function() {
//       // ホバーが外れたときに元のスケールに戻す
//       $(this).closest('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css('transform', 'scale(1)');
//     }
//   );
// });

$(document).ready(function() {
  // .about-wrap__block__bottom__left__img と .about-wrap__block__bottom__right__img に初期状態を設定
  $('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css({
    'background-size': 'cover',
    'background-position': '50% 50%', // 初期状態で中央に配置
    'background-repeat': 'no-repeat',
    'transition': 'background-position 0.4s' // background-position のトランジションを設定
  });

  // .about-wrap__block__bottom__left__img__txt と .about-wrap__block__bottom__right__img__txt にホバーイベントを設定
  $('.about-wrap__block__bottom__left__img__txt, .about-wrap__block__bottom__right__img__txt').hover(
    function() {
      // ホバーされたときに背景画像の位置を変更してズームイン効果を出す
      $(this).closest('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css('background-position', '50% 60%');
    },
    function() {
      // ホバーが外れたときに背景画像の位置を元に戻す
      $(this).closest('.about-wrap__block__bottom__left__img, .about-wrap__block__bottom__right__img').css('background-position', '50% 50%');
    }
  );
});


 // フェードインについて関数でまとめる
function fadeIn() {
  $('.fadeUpTrigger').each(function () { // fadeUpTriggerクラスの各要素に対して
    let scroll = $(window).scrollTop(); // スクロール位置を取得する
    let triTop = $(this).offset().top + 100; // 要素の上部より100px下の位置を取得
    let winHeight = $(window).height(); // ウィンドウの高さを取得
    if (scroll >= triTop - winHeight) { // 画面内に要素が入ったかを判断
      $(this).addClass('fadeUp'); // fadeUpクラスを付与
    } else {
      $(this).removeClass('fadeUp'); // fadeUpクラスを削除
    }
  });
  // フェードレフトについて
  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });

  $('.fadeRightTrigger2').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight_2');
    } else {
      $(this).removeClass('fadeRight_2');
    }
  });
  // フェードライトについて
  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });

  $('.fadeRotateTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRotate');
    } else {
      $(this).removeClass('fadeRotate');
    }
  });
}

$(window).scroll(function () { // スクロールしたら
  fadeIn(); // 関数を実行
});