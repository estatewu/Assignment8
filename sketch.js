var x=20;
  
function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  setMoveThreshold(3);
  setShakeThreshold(10);
}

function draw(){
  background('#fa693c');
  rotateX(radians(map(rotationX,-180,180,0,720)));
  rotateY(radians(map(rotationY,-90,90,0,720)));
  rotateZ(radians(map(rotationZ,0,360,0,720)));
  plane(350, 350,3,4);
  if(x>=160){
      x=0;
  }
}

function deviceMoved(){
    x+=4;   
}

//127.0.0.1:51023
