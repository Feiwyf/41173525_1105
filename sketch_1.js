let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=10 //增加上下幅度
let angle=0 //三角函數內角度
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/DancingScript-VariableFont_wght.ttf") 
}
//===================================================




function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fdf0d5")
  points = font.textToPoints("ImFine", 350, 550, 400, {
    sampleFactor:0.13
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小

angleMode(DEGREES);//宣告使用0~360度


}

function draw() {
  
  background("#fdf0d5");
  for (let i=0; i<points.length-1; i++) {

     strokeWeight(4)
     fill("#780000")
    //text(str(i),points[i].x,points[i].y)//數字編號
    //noStroke()//無框線
    //ellipse(points[i].x,points[i].y,11)//畫圓圈
    stroke("#780000")//線的顏色
    line(points[i].x,points[i].y+r*sin(angle+i),points[i+1].x,points[i+1].y+r*sin(angle+i*2))
 }
 angle = angle +7 //每化圖一次，角度+10
}
