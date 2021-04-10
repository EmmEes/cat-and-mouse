var fixedRect, movingRect , Arect , Brect;



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(10,200,80,30);
  movingRect.shapeColor = "cyan";
  movingRect.debug = true;
  Brect = createSprite(454, 100, 79, 23);
  Brect.shapeColor = "red";
  Brect.velocityX = 2;
  Arect = createSprite(700, 100, 98, 40);
  Arect.shapeColor = "pink";
  Arect.velocityX = -2;
}


function draw() {
  
  background(255,255,255);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
if(fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.x - fixedRect.x< fixedRect.width/2 + movingRect.width/2 && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor = "yellow";
  }else{
    movingRect.shapeColor = "cyan";
  }
  if(Arect.x-Brect.x < Arect.width/2 + Brect.width/2 && Brect.x - Arect.x< Arect.width/2 + Brect.width/2) {
    Arect.velocityX = Arect.velocityX * (-1);
    Brect.velocityX = Brect.velocityX * (-1);
    }

    if (Arect.y-Brect.y < Arect.height/2 + Brect.height/2 && Brect.y-Arect.y < Arect.height/2 + Brect.height/2){
      Arect.velocityY = Arect.velocityY * (-1);
      Brect.velocityY = Brect.velocityY * (-1);


      
    }
  drawSprites();
}