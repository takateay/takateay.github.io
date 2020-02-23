$(function () {
    pdfListChange();
});
function pdfChange() {
    var url = document.getElementById("pdf-select-001").value;
    var division = document.getElementById("pdf-select-002").value;
    if (url !== "" && division !== ""){
  
      url = 'https://docs.google.com/viewer?url=https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_'+url.replace('_sc_','_'+division+'_');
  
      if (division == 'ap' || division == 'fe' || division == 'sg'){
        url = url.replace('_pm1','_pm');
      }
  
      pdfChange001(url+'_qs.pdf&embedded=true');
      pdfChange002(url+'_qs.pdf&embedded=true');
      pdfChange003(url+'_ans.pdf&embedded=true');
      pdfChange004(url+'_cmnt.pdf&embedded=true');  
  
    }
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
  function pdfListChange(){
    var resetflg;
    var division = document.getElementById("pdf-select-002").value;
    var objs = document.getElementsByClassName("notkoudo");
    var objs2 = document.getElementsByClassName("koudo-haru");
    var objs3 = document.getElementsByClassName("koudo-aki");
    if (division == 'ap' || division == 'fe' || division == 'sg'){
      actDisplay(objs,'block');
      actDisplay(objs2,'none');
      actDisplay(objs3,'none');
    }else if (division == 'sc') {
      actDisplay(objs,'none');
      actDisplay(objs2,'block');
      actDisplay(objs3,'block');    
    } else if (division == 'pm' || division == 'db' || division == 'es' || division == 'au') {
      actDisplay(objs,'none');
      actDisplay(objs2,'block');
      actDisplay(objs3,'none');    
    } else {
      actDisplay(objs,'none');
      actDisplay(objs2,'none');
      actDisplay(objs3,'block');   
    }
    document.getElementById("pdf-select-001").value = "";
  };
  function actDisplay(objs,dispro,resetflg){
    Array.prototype.forEach.call(objs, function (obj) {
        obj.style.display = dispro;    
    });
  };