// フロア（エレベータ動作域）のElementを取得
const floor0 = document.getElementById('floor0');
const floor1 = document.getElementById('floor1');
const floor2 = document.getElementById('floor2');
const floor3 = document.getElementById('floor3');
const floor4 = document.getElementById('floor4');

// 現在地を示すフロアライトのElementを取得
const light0 = document.getElementById('light0');
const light1 = document.getElementById('light1');
const light2 = document.getElementById('light2');
const light3 = document.getElementById('light3');
const light4 = document.getElementById('light4');

// UPボタン変数// 上昇ボタンのElementを取得
const up0 = document.getElementById('up0');
const up1 = document.getElementById('up1');
const up2 = document.getElementById('up2');
const up3 = document.getElementById('up3');

// 下降ボタンのElementを取得
const down1 = document.getElementById('down1');
const down2 = document.getElementById('down2');
const down3 = document.getElementById('down3');
const down4 = document.getElementById('down4');

// 全体のデフォルトカラー設定
const defaultColor = "#CCCCCC";

// 現在地を示すカラー設定
const changeColorFloor = "blue";
const changeColorLight = "red";
const changeColorBtn = "yellow";

// エレベータがフロアを移動している時のカラー設定
const changeMoveFloor = "yellow";

// エレベータが停止している階の初期値
let stayFloor = 0;

// エレベーターが動作しているときは他の回でボタンを押すことができないようにする
let activate = 1;

// ボタンをクリックした時、色をつける
function changeColor(exBtn, exLight, exFloor) {
  exBtn.style.backgroundColor = changeColorBtn;
  exLight.style.backgroundColor = changeColorLight;
  exFloor.style.backgroundColor = changeColorFloor;
}

function pushBtn(exUpBtn, exDownBtn, exLight) {
  if (exUpBtn != "") {
    exUpBtn.style.backgroundColor = changeColorBtn;
  }
  if (exDownBtn != "") {
    exDownBtn.style.backgroundColor = changeColorBtn;
  }
  exLight.style.backgroundColor = changeColorLight;
}

// フロアを強制的にデフォルトカラーに戻す
function resetColor(reUpBtn, reDownBtn, reLight) {
  if (reUpBtn != "") {
    reUpBtn.style.backgroundColor = defaultColor;
  }
  if (reDownBtn != "") {
    reDownBtn.style.backgroundColor = defaultColor;
  }
  reLight.style.backgroundColor = defaultColor;
}

// セットタイムクラス生成
class setTime1000 {
  setTime1000(flr, flr1) {
    flr1.style.backgroundColor = changeMoveFloor;
    setTimeout(() => {
      flr1.style.backgroundColor = defaultColor;
      flr.style.backgroundColor = changeColorFloor;
      console.log('到着しました。');
    }, 1000);
    setTimeout(() => {
      console.log('ドアが開きます。');
      activate = 1;
    }, 1500);
  }
}
const setTimer1000 = new setTime1000();

class setTime2000 {
  setTime2000(flr, flr1, flr2) {
    flr2.style.backgroundColor = changeMoveFloor;
    setTimeout(() => {
      flr2.style.backgroundColor = defaultColor;
      flr1.style.backgroundColor = changeMoveFloor;
    }, 1000);
    setTimeout(()=> {
      flr1.style.backgroundColor = defaultColor;
      flr.style.backgroundColor = changeColorFloor;
      console.log('到着しました。');
    }, 2000);
    setTimeout(() => {
      console.log('ドアが開きます。');
      activate = 1;
    }, 2500);
  }
}
const setTimer2000 = new setTime2000();

class setTime3000 {
  setTime3000(flr, flr1, flr2, flr3) {
    flr3.style.backgroundColor = changeMoveFloor;
    setTimeout(() => {
      flr3.style.backgroundColor = defaultColor;
      flr2.style.backgroundColor = changeMoveFloor;
    }, 1000);
    setTimeout(()=> {
      flr2.style.backgroundColor = defaultColor;
      flr1.style.backgroundColor = changeMoveFloor;
    }, 2000);
    setTimeout(()=> {
      flr1.style.backgroundColor = defaultColor;
      flr.style.backgroundColor = changeColorFloor;
      console.log('到着しました。');
    }, 3000);
    setTimeout(() => {
      console.log('ドアが開きます。');
      activate = 1;
    }, 3500);
  }
} 
const setTimer3000 = new setTime3000();

class setTime4000 {
  setTime4000(flr, flr1, flr2, flr3, flr4) {
    flr4.style.backgroundColor = changeMoveFloor;
    setTimeout(() => {
      flr4.style.backgroundColor = defaultColor;
      flr3.style.backgroundColor = changeMoveFloor;
    }, 1000);
    setTimeout(()=> {
      flr3.style.backgroundColor = defaultColor;
      flr2.style.backgroundColor = changeMoveFloor;
    }, 2000);
    setTimeout(()=> {
      flr2.style.backgroundColor = defaultColor;
      flr1.style.backgroundColor = changeMoveFloor;
    }, 3000);
    setTimeout(()=> {
      flr1.style.backgroundColor = defaultColor;
      flr.style.backgroundColor = changeColorFloor;
      console.log('到着しました。');
    }, 4000);
    setTimeout(() => {
      console.log('ドアが開きます。');
      activate = 1;
    }, 4500);
  }
} 
const setTimer4000 = new setTime4000();


// 0階Up0制御部
function setUp0() {
  if (stayFloor == 0) {
    changeColor(up0, light0, floor0);

  } else if (stayFloor == 1) {
    pushBtn(up0, "", light0);
    resetColor(up1, down1, light1);
    setTimer1000.setTime1000(floor0, floor1);

  } else if (stayFloor == 2) {
    pushBtn(up0, "", light0);
    resetColor(up2, down2, light2);
    setTimer2000.setTime2000(floor0, floor1, floor2);

  } else if (stayFloor == 3) {
    pushBtn(up0, "", light0);
    resetColor(up3, down3, light3);
    setTimer3000.setTime3000(floor0, floor1, floor2, floor3);

  } else {
    pushBtn(up0, "", light0);
    resetColor("", down4, light4);
    setTimer4000.setTime4000(floor0, floor1, floor2, floor3, floor4);
  } 
  stayFloor = 0;
}

// 1階Up制御部
function setUp1() {
  if(stayFloor == 0) {
    pushBtn(up1, "", light1);
    resetColor(up0, "", light0);
    setTimer1000.setTime1000(floor1, floor0);

  } else if (stayFloor == 1) {
    down1.style.backgroundColor = defaultColor;
    changeColor(up1, light1, floor1);

  } else if (stayFloor == 2) {
    pushBtn(up1, "", light1);
    resetColor(up2, down2, light2);
    setTimer1000.setTime1000(floor1, floor2);

  } else if (stayFloor == 3) {
    pushBtn(up1, "", light1);
    resetColor(up3, down3, light3);
    setTimer2000.setTime2000(floor1, floor2, floor3);

  } else {
    pushBtn(up1, "", light1);
    resetColor("", down4, light4);
    setTimer3000.setTime3000(floor1, floor2, floor3, floor4);
  }  
  stayFloor = 1;
}

// 1階down制御部
function setDown1() {
  if (stayFloor == 0) {
    pushBtn("", down1, light1);
    resetColor(up0, "", light0);
    setTimer1000.setTime1000(floor1, floor0);

  } else if (stayFloor == 1) {
    up1.style.backgroundColor = defaultColor;
    changeColor(down1, light1, floor1);

  } else if (stayFloor == 2) {
    pushBtn("", down1, light1);
    resetColor(up2, down2, light2);
    setTimer1000.setTime1000(floor1, floor2);

  } else if (stayFloor == 3) {
    pushBtn("", down1, light1);
    resetColor(up3, down3, light3);
    setTimer2000.setTime2000(floor1, floor2, floor3);

  } else {
    pushBtn("", down1, light1);
    resetColor("", down4, light4);
    setTimer3000.setTime3000(floor1, floor2, floor3, floor4);
  }
  stayFloor = 1;
}

// 2階Up制御部
function setUp2() {
  if (stayFloor == 0) {
    pushBtn(up2, "", light2);
    resetColor(up0, "", light0);
    setTimer2000.setTime2000(floor2, floor1, floor0);

  } else if (stayFloor == 1) {
    pushBtn(up2, "", light2);
    resetColor(up1, down1, light1);
    setTimer1000.setTime1000(floor2, floor1);

  } else if (stayFloor == 2) {
    down2.style.backgroundColor = defaultColor;
    changeColor(up2, light2, floor2);

  } else if (stayFloor == 3) {
    pushBtn(up2, "", light2);
    resetColor(up3, down3, light3);
    setTimer1000.setTime1000(floor2, floor3);

  } else {
    pushBtn(up2, "", light2);
    resetColor("", down4, light4);
    setTimer2000.setTime2000(floor2, floor3, floor4);
  }
  stayFloor = 2;
}

// 2階down制御部
function setDown2() {
  if (stayFloor == 0) {
    pushBtn("", down2, light2);
    resetColor(up0, "", light0);
    setTimer2000.setTime2000(floor2, floor1, floor0);

  } else if (stayFloor == 1) {
    pushBtn("", down2, light2);
    resetColor(up1, down1, light1);
    setTimer1000.setTime1000(floor2, floor1);

  } else if (stayFloor == 2) {
    up2.style.backgroundColor = defaultColor;
    changeColor(down2, light2, floor2);
  
  } else if (stayFloor == 3) {
    pushBtn("", down2, light2);
    resetColor(up3, down3, light3);
    setTimer1000.setTime1000(floor2, floor3);

  } else {
    pushBtn("", down2, light2);
    resetColor("", down4, light4);
    setTimer2000.setTime2000(floor2, floor3, floor4);
  }
  stayFloor = 2;
}

// 3階Up制御部
function setUp3() {
  if (stayFloor == 0) {
    pushBtn(up3, "", light3);
    resetColor(up0, "", light0);
    setTimer3000.setTime3000(floor3, floor2, floor1, floor0);

  } else if (stayFloor == 1) {
    pushBtn(up3, "", light3);
    resetColor(up1, down1, light1);
    setTimer2000.setTime2000(floor3, floor2, floor1);

  } else if (stayFloor == 2) {
    pushBtn(up3, "", light3);
    resetColor(up2, down2, light2);
    setTimer1000.setTime1000(floor3, floor2);

  } else if (stayFloor === 3) {
    down3.style.backgroundColor = defaultColor;
    changeColor(up3, light3, floor3);

  } else {
    pushBtn(up3, "", light3);
    resetColor("", down4, light4);
    setTimer1000.setTime1000(floor3, floor4);
  }
  stayFloor = 3;
}

// 3階down制御部
function setDown3() {
  if (stayFloor == 0) {
    pushBtn("", down3, light3);
    resetColor(up0, "", light0);
    setTimer3000.setTime3000(floor3, floor2, floor1, floor0);

  } else if (stayFloor == 1) {
    pushBtn("", down3, light3);
    resetColor(up1, down1, light1);
    setTimer1000.setTime2000(floor3, floor2, floor1);

  } else if(stayFloor == 2) {
    pushBtn("", down3, light3);
    resetColor(up2, down2, light2);
    setTimer1000.setTime1000(floor3, floor2);

  } else if (stayFloor == 3) {
    up3.style.backgroundColor = defaultColor;
    changeColor(down3, light3, floor3);
  
  } else {
    pushBtn("", down3, light3);
    resetColor("", down4, light4);
    setTimer1000.setTime1000(floor3, floor4);
  }
  stayFloor = 3;
}

// 4階down制御部
function setDown4() {
  if (stayFloor == 0) {
    pushBtn("", down4, light4);
    resetColor(up0, "", light0);
    setTimer4000.setTime4000(floor4, floor3, floor2, floor1, floor0);

  } else if(stayFloor == 1) {
    pushBtn("", down4, light4);
    resetColor(up1, down1, light1);
    setTimer3000.setTime3000(floor4, floor3, floor2, floor1);

  } else if (stayFloor == 2) {
    pushBtn("", down4, light4);
    resetColor(up2, down2, light2);
    setTimer2000.setTime2000(floor4, floor3, floor2);

  } else if (stayFloor == 3) {
    pushBtn("", down4, light4);
    resetColor(up3, down3, light3);
    setTimer1000.setTime1000(floor4, floor3);

  } else {
    changeColor(down4, light4, floor4);
  }
  stayFloor = 4;
}

//クリックイベント クラス
class E  {
  Func(btn, num, func) {
    btn.addEventListener('click', function() {
      if (stayFloor != num) {
        if(activate === 1) {
          activate = 0;
          console.log('ドアが閉まります。');
          func();
          setTimeout(() => {
            console.warn('到着までお待ちください。');
          }, 500);
      }
      } else {
        console.log('ドアが閉まります!');
        func();
      }
    });
  }
}

// イベントインスタンス
const eBtn = new E();

// 0階イベント
eBtn.Func(up0, 0, setUp0);

// 1階イベント
eBtn.Func(up1, 1, setUp1);
eBtn.Func(down1, 1, setDown1);

// 2階イベント
eBtn.Func(up2, 2, setUp2);
eBtn.Func(down2, 2, setDown2);

// 3階イベント
eBtn.Func(up3, 3, setUp3);
eBtn.Func(down3, 3, setDown3);

// 4階イベント
eBtn.Func(down4, 4, setDown4);
