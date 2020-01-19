$(function () {
  // 変数宣言
  // TOPに戻るスクロール
  var pagetop = $('#top-btn');

  // 上に戻るボタンを非表示する
  pagetop.hide();

  // TOPに戻るスクロール
  $('.scroll-spase').scroll(function () {
    if ($(this).scrollTop() > 1) {
      // 上に戻るボタンを表示する
      pagetop.fadeIn();
    } else {
      // 上に戻るボタンを非表示する
      pagetop.fadeOut();
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      // 上に戻るボタンを表示する
      pagetop.fadeIn();
    } else {
      // 上に戻るボタンを非表示する
      pagetop.fadeOut();
    }
  });
  // 上に戻るボタンをクリックした場合
  pagetop.click(function () {
    // トップに戻る
    $('.scroll-spase').animate({ scrollTop: 0 }, 500);
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  // フェードイン、フェードアウトを繰り返し
  setInterval(function () {
    $('#flash-txt').fadeOut('slow', function () {
      $(this).fadeIn('slow');
    });
  }, 200);
  // キーボード入力時の処理
  $('html').keydown(function (e) {
    switch (e.which) {
      case 13: // Enter
        $('.console-box p').removeClass('hidden');
        $('.console-box p:nth-child(1) span').addClass('hidden');
        break;
    }
  });
  // 要素の表示・非表示
  $(".tw-open").click(function () {
    $("#aside-space").show(0);
  });
  $(".click-list").click(function () {
    $(this).children(".hidden-list").toggle(50);
  });
  $(".tw-close").click(function () {
    $("#aside-space").hide(0);
  });
  $(".edit-open").click(function () {
    $("#edit-space").hide(0);
  });
  $("#descktop-icon").click(function () {
    $("#edit-space").show(0);
  });
  // input dateに今日日付をセット
    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0"+(today.getMonth()+1)).slice(-2);
    var dd = ("0"+today.getDate()).slice(-2);
    document.getElementById("contact-date").value=yyyy+'-'+mm+'-'+dd;  
});
function msg001() {
  alert('ありがとうございます。');
};
