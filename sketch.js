var Harold = function (){
  var faceX = random(0,1000);
  var faceY = random(0,1000);
   noStroke();
  //FILL
  fill(252,249,70)
  ellipse(faceX,faceY + 100,350)
  fill(0);
  //eyes
  ellipse(faceX - 50,faceY,50)
  ellipse(faceX + 60,faceY,50)
  fill(255,0,0)
  ellipse(faceX,faceY + 200,100)
}


function setup() {
  createCanvas(windowWidth,windowHeight)
  //frameRate(8);
}

function draw() {
   background(255)
 Harold();
  Harold();
   Harold();
}
function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}
