$(function () {

  // ローディング画面のdivを取得
  var showloading = document.getElementById('loading-page');
  // 画面本体のdivを取得
  var contents = document.getElementById('all-contents');
  // 読み込みが完了したら発動
  window.addEventListener('load', function () {
    // loadingのdivを非表示に
    showloading.style.display = 'none';
    // contentsのdivを表示
    contents.classList.remove('dsnone');
  });

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
  var mm = ("0" + (today.getMonth() + 1)).slice(-2);
  var dd = ("0" + today.getDate()).slice(-2);
  document.getElementById("contact-date").value = yyyy + '-' + mm + '-' + dd;
});
function msg001() {
  alert('ありがとうございます。');
};
function pdfChange() {
  var url = document.getElementById("pdf-select-001").value;
  url = 'https://docs.google.com/viewer?url=https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_'+url;
  pdfChange001(url+'_qs.pdf&embedded=true');
  pdfChange002(url+'_qs.pdf&embedded=true');
  pdfChange003(url+'_ans.pdf&embedded=true');
  pdfChange004(url+'_cmnt.pdf&embedded=true');
};
function pdfChange001(url){
  var obj = document.getElementById('pdf-zoon-001');
  obj.setAttribute('src',url);
  cln(obj);
};
function pdfChange002(url){
  var obj = document.getElementById('pdf-zoon-002');
  obj.setAttribute('src',url);
  cln(obj);
};
function pdfChange003(url){
  var obj = document.getElementById('pdf-zoon-003');
  obj.setAttribute('src',url);  
  cln(obj);
};
function pdfChange004(url){
  var obj = document.getElementById('pdf-zoon-004');
  obj.setAttribute('src',url);
  cln(obj);
};
function cln(obj){
  var clone = obj.cloneNode(true);
  obj.parentNode.replaceChild(clone, obj);
};
