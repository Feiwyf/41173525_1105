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
  background("#EADEB8")
  points = font.textToPoints("ImFine", -463, 130, 350, {
    sampleFactor:0.13
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小

angleMode(DEGREES);//宣告使用0~360度

}

function draw() {
background("#EADEB8");

  noFill()
  stroke("#619397")
  strokeWeight(1.5)
  var rect_width = 50+mouseX/60 //宣告一個變數var rect_width ，方形寬度
 var bc_w = 50+mouseY/40   //大園的寬
 var sc_w = 25  //小圓的寬
 rectMode(CENTER)
 for(let j =0;j<25;j=j+1){
   for (let x=0;x<width; x = x+rect_width)
   {
     ellipse(x,25+50*j,bc_w)
     rect(x,25+50*j,rect_width)
     ellipse(25+x+rect_width,50+50*j,sc_w)
   }
 }
  
  translate(width/2,height/2)
  rotate((angle/30)%360)
  for (let i=0; i<points.length-1; i++) {

     strokeWeight(8)
     fill("#780000")
    stroke("#780000")//線的顏色
    line(points[i].x,points[i].y+r*sin(angle+i),points[i+1].x,points[i+1].y+r*sin(angle+i*2))
 }
 angle = angle +8 //每化圖一次，角度+10
}

