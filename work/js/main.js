pdfListChange();
csvOp();
function csvOp(){
    getCSV("./csv/sc_nw_yougo.csv");
    getCSV("./csv/sc_sc_yougo.csv");
};
function csvArt(result){
    var rdni = getRandomInt(1,result.length -1);
    alert('重要用語：\n'+result[rdni][0].replace('"',''));
    alert('説明：\n'+result[rdni][1].replace('"',''));
};
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
//CSVファイルを読み込む関数getCSV()の定義
function getCSV(csvName){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", csvName, true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
        var result = convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
        csvArt(result);
    }
};

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\r\n"); // 改行を区切り文字として行を要素とした配列を生成
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split('","');
    }
    return result;
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};