var curTime = 60;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //count down time
  curTime = curTime - 1/30; // might need to change this to frame rate
  

  
  //display time
  background(220);
  textSize(100);
  textAlign(CENTER);
  text(round(curTime), 200, 225);
  // text(frameRate(),100,100);
  
  if(curTime < 0)
    background(255,0,0);
}