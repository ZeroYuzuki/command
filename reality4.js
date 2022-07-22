

function msgdsp() {
    alert("高校生が暇つぶしで作った、Realityの★★★★衣装だけを集めたサイトです。色は主の好みで選んでます。わざわざ試着するのがめんどいって人にいいかも");
}

function zr16() {
    alert("★★★★  0.50%    ★★★☆ 1.00%   ★★☆☆ 2.98%");
}

function zr15() {
    alert("★★★★  0.39%    ★★★☆ 1.00%   ★★☆☆ 2.98%");
}

function zr14() {
    alert("★★★★  0.29%    ★★★☆ 1.25%   ★★☆☆ 2.98%");
}

function zr13() {
    alert("★★★★  0.7%    ★★★☆ 1.25%   ★★☆☆ 2.31%");
}

function zr12() {
    alert("★★★★  0.5%    ★★★☆ 1.67%   ★★☆☆ 3.76%");
}

function zr11() {
    alert("★★★★  0.5%    ★★★☆ 1.25%   ★★☆☆ 2.98%");
}

function zr10() {
    alert("★★★★  0.5%    ★★★☆ 1.25%   ★★☆☆ 3.76%");
}

function zr9() {
    alert("★★★★  0.5%    ★★★☆ 1.00%   ★★☆☆ 2.98%");
}

function zr8() {
    alert("★★★★  0.5%    ★★★☆ 1.25%   ★★☆☆ 3.76%");
}

function zr7() {
    alert("★★★★  0.32%    ★★★☆ 1.25%   ★★☆☆ 2.98%");
}

function zr6() {
    alert("★★★★  0.7%    ★★★☆ 1.67%   ★★☆☆ 3.76%");
}

function zr4() {
    alert("★★★★  0.5%    ★★★☆ 1.14%   ★★☆☆ 4.21%");
}

function zr3() {
    alert("★★★★  0.32%    ★★★☆ 1.00%   ★★☆☆ 2.98%");
}

// タイマーここから
let countdown = setInterval(function(){
    document.querySelectorAll('.timer').forEach(function (elem) {
        const now = new Date()  //今の日時
        const targetTime = new Date(elem.getAttribute("data-target-time"))  //ターゲット日時を取得
        const remainTime = targetTime - now  //差分を取る（ミリ秒で返ってくる

        // 指定の日時を過ぎていたらスキップ
        if(remainTime < 0) return true

        // //差分の日・時・分・秒を取得
        
        const difDay = Math.floor(remainTime / 1000 / 60 / 60 / 24) % 365
        const difHour = Math.floor(remainTime / 1000 / 60 / 60 ) % 24
        const difMin = Math.floor(remainTime / 1000 / 60) % 60
        const difSec = Math.floor(remainTime / 1000) % 60

        // //残りの日時を上書き
        
        elem.querySelectorAll('.timer-day')[0].textContent = difDay
        elem.querySelectorAll('.timer-hour')[0].textContent = difHour
        elem.querySelectorAll('.timer-min')[0].textContent = difMin
        elem.querySelectorAll('.timer-sec')[0].textContent = difSec
    });
}, 1000)    //1秒間に1度処理
// タイマーここまで

/*
Background Gradients From -- 
https://uigradients.com
*/

function keisan(){

	// 設定開始

	// 商品1
	var price1 = document.form1.goods1.selectedIndex * 500; // 単価を設定
	document.form1.field1.value = price1; // 小計を表示

	// 商品2
	var price2 = document.form1.goods2.selectedIndex * 5000; // 単価を設定
	document.form1.field2.value = price2; // 小計を表示

	// 合計を計算
	var total = price1 + price2;

	// 設定終了


	document.form1.field_total.value = total; // 合計を表示

}
