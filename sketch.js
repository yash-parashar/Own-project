var box1,box1Image,box2,box2Image,box3,box3Image,box4,box4Img,box5,box5Img,bgImg
var bgImg,gameState,Start;

function preload(){
  bgImg=loadImage("sprites/bg.png")
  box1Image=loadImage("sprites/soldier.png")
  box2Image=loadImage("sprites/enemy1.png")
  box3Image=loadImage("sprites/enemy2.png")
  box4Img=loadImage("sprites/enemy3.png")
  box5Img=loadImage("sprites/enemy4.png")

}

function setup(){

  createCanvas(1000,750);


  box1=createSprite(190,490,70,70)
  box1.addImage(box1Image)
  box1.scale=1

  box2=createSprite(820,400,70,70)
  box2.addImage(box2Image)
  box2.scale=0.3

  box3=createSprite(820,280,70,70)
  box3.addImage(box3Image)
  box3.scale=0.3

  box4=createSprite(820,520,70,70)
  box4.addImage(box4Img)
  box4.scale=0.3

  box5=createSprite(820,160,70,70)
  box5.addImage(box5Img)
  box5.scale=0.3

}

function draw(){
  background(bgImg);

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

if(keyDown("LEFT_ARROW")){
box1.x=box1.x-3;
}

if(keyDown("RIGHT_ARROW")){
  box1.x=box1.x+3;
  }

}