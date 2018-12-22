// kazuate.js
const DEBUG = false;
const SEIKAI = false;

const replaySmall = {
    word: '小さすぎます',
    img: '<img src="images/think.jpg" alt="">',
}
const replayBig = {
    word: '大きすぎます',
    img: '<img src="images/deha_s.jpg" alt="">',
}
const replaySeikai = {
    word: '大正解！',
    img: '<img src="images/nice_s.jpg" alt="">',
}
const setsumei = {
    word: '私とゲームをしましょう。私が2桁の数を思い浮かべますから、その数字を当ててください。',
    img: '<img src="images/big_s.jpg" alt="">',
}
const replayMesImg = {
    word: '数を決めましたよ。当たるかな？',
    img: '<img src="images/start_s.jpg" alt="">',
}




function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

class Kazu {
    
    constructor() {
        this.max = 99;
        this.min = 0;
        this.atari = 0;
        this.usernum = 0;
    }

    get showAtari() { return this.atari; }
    set setAtari(num) {
        this.atari = num;
    }

    get userNumber() { return this.usernum; }
    set userNumber(number) {
        this.usernum = number;
    }

    hantei(number) {
        if (number < this.atari)
            return replaySmall;
        else if (number > this.atari)
            return replayBig;
        else
            return replaySeikai;
    }
}

function huum () {
    let target = document.getElementById("message-area");
    target.innerHTML = "......。";
}

function kazu_up_10() {
    huum();
    let userNum = kazu1.userNumber;
    let userKazu10 = Math.floor(userNum / 10);
    let userKazu01 = userNum % 10;
    if (DEBUG) console.log(userKazu10);
    userKazu10++;
    if (userKazu10 > 9) userKazu10 = 9;
    userNum = userKazu10 * 10 + userKazu01;
    kazu1.userNumber = userNum;
    if (DEBUG) console.log(userNum);
    prKazu10(userKazu10);
}
function kazu_down_10() {
    huum();
    let userNum = kazu1.userNumber;
    let userKazu10 = Math.floor(userNum / 10);
    let userKazu01 = userNum % 10;
    if (DEBUG) console.log(userKazu10);
    userKazu10--;
    if (userKazu10 < 0) userKazu10 = 0;
    userNum = userKazu10 * 10 + userKazu01;
    kazu1.userNumber = userNum;
    if (DEBUG) console.log(userNum);
    prKazu10(userKazu10);
}

function kazu_up_01() {
    huum();
    let userNum = kazu1.userNumber;
    let userKazu10 = Math.floor(userNum / 10);
    let userKazu01 = userNum % 10;
    userKazu01++;
    if (userKazu01 > 9) {
        userKazu10++;
        if (userKazu10 > 9)
            userKazu10 = 9;
        userKazu01 = 0;
    }
    userNum = userKazu10 * 10 + userKazu01;
    // 新しいユーザー決定数字をセット
    kazu1.userNumber = userNum;
    if (DEBUG) console.log(userNum);
    prKazu01(userKazu01);
    prKazu10(userKazu10);
}

function kazu_down_01() {
    huum();
    let userNum = kazu1.userNumber;
    let userKazu01 = userNum % 10;
    let userKazu10 = Math.floor(userNum / 10);
    if (DEBUG) console.log(userKazu01);
    userKazu01--;
    if (userKazu01 < 0) {
        userKazu10--;
        if (userKazu10 < 0)
            userKazu10 = 0;
        userKazu01 = 9;
    }
    userNum = userKazu10 * 10 + userKazu01;
    kazu1.userNumber = userNum;
    if (DEBUG) console.log(userNum);
    prKazu01(userKazu01);
    prKazu10(userKazu10);
}

function prMessageArea(obj) {
    let target1 = document.getElementById("message-area");
    target1.innerHTML = `${obj.word}`;
    let target2 = document.getElementById("image-area");
    target2.innerHTML = `${obj.img}`;
}    

function userNumber() {
    let kekka = kazu1.hantei(kazu1.userNumber);
    if (DEBUG) console.log(kekka.word);
    prMessageArea(kekka);
}
function prKazu10(num) {
    let target = document.getElementById("kazu-input-10");
    target.innerHTML = `${num}`;
}
function prKazu01(num) {
    let target = document.getElementById("kazu-input-01");
    target.innerHTML = `${num}`;
}

function replay() {
    kazu1.setAtari = rand(1, 99);
    if (SEIKAI) console.log(kazu1.showAtari);
    prMessageArea(replayMesImg);
}



const kazu1 = new Kazu();
kazu1.setAtari = rand(1, 99);
if (SEIKAI) console.log(kazu1.showAtari);
prKazu10(0);
prKazu01(0);
prMessageArea(setsumei);

// let userNum = 3;
// console.log(kazu1.hantei(userNum));
