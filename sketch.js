//BALLOON BUSTER REMASTERED BY RACHIT CHAKRABORTY


var bow , 
    arrow,  
    background, 
    redB, 
    pinkB, 
    greenB ,
    blueB ,
    arrowGroup;


var bowImage, 
    arrowImage, 
    green_balloonImage, 
    red_balloonImage, 
    pink_balloonImage ,
    blue_balloonImage, 
    backgroundImage;


function preload(){
  
  //loading the images
  
  backgroundImage = loadImage("background.jpg");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("PngItem_990087.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() 
{
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  // creating the bow 
  bow = createSprite(560,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.4;
  
  score = 0 ;
  
  //creating the groups
  
  arrowGroup = new Group();
  redB = new Group();
  pinkB = new Group();
  greenB = new Group();
  blueB = new Group();
  
}

 
function draw() 
{

  // moving ground infinitely   
  background.velocityX = -3;
  
if (background.x < 0)
{
      background.x = background.width/2;
}
  
  //to move the bow with our mouse
  bow.y = World.mouseY
  
  // for releasing arrow when F key is pressed
  if (keyDown("f")) 
  {
    createArrow(); 
  }
  
  //creating balloons at random positions
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0)
  {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  
 //to increase score if the arrow hits the balloons 
  
 if(arrowGroup.isTouching(redB))
  {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
 if(arrowGroup.isTouching(pinkB))
  {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
  } 
  
 if(arrowGroup.isTouching(blueB))
  {
     blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
  }
  
 if(arrowGroup.isTouching(greenB))
  {
     greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+5;
  }  

 
  
  drawSprites();
  
  //adding the text
   textSize(30)
     fill('rgb(0,255,0)'); 
   text("Score: "+ score, 450,50);
   textSize(30)
}

//function for the red balloons
function redBalloon() 
{
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 7;
  red.lifetime = 60;
  red.scale = 0.1;
  redB.add(red);  
}

//functions for the blue balloons
function blueBalloon() 
{
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 7;
  blue.lifetime = 60;
  blue.scale = 0.1;
  blueB.add(blue);
}

//function for the green balloons
function greenBalloon() 
{
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 7;
  green.lifetime = 60;
  green.scale = 0.1;
  greenB.add(green);   
}

//function for the pink balloons
function pinkBalloon() 
{
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 7;
  pink.lifetime = 60;
  pink.scale = 1
  pinkB.add(pink);
}


// function for the arrows
 function createArrow() 
{
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 560;
  arrow.y=bow.y+10;
  arrow.velocityX = -10;
  arrow.lifetime = 70;
  arrow.scale = 0.1;
  arrowGroup.add(arrow);  
}

// THANK YOU :) //