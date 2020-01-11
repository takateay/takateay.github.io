$(function () {
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
  $(".click-list").click(function () {
    $(this).children(".hidden-list").toggle(50);
  });
});