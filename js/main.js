$(function () {
    // フェードイン、フェードアウトを繰り返し
    setInterval(function() {
      $('#flash-txt').fadeOut('slow', function() {
        $(this).fadeIn('slow');
      });
    }, 200);
  });