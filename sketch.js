var apple, appleimage;
var man,manstandingimage,manshootinhgimage;
var arrow, arrowImage;
var background, backgroundImage;
var jackFruit, jackFruitImage;
var watermelon, watermelonImage;
var pineApple, pineAppleImage;
var ObstaclesGroup;
var appleGroup;
var jackFruitGroup;
var watermelonGroup;
var pineAppleGroup;
var arrowGroup;

function preload(){
  appleimage = loadImage("apple-removebg-preview.png")

  manstandingimage=loadImage("man_standing-removebg-preview (1).png")


  arrowImage=loadImage("arrow-removebg-preview.png");
  backgroundImage = loadImage("backimg.jpg")
 jackFruitImage = loadImage("jackFruit_img-removebg-preview.png")

watermelonImage = loadImage("watermelon_img-removebg-preview.png")

pineAppleImage = loadImage("pineApple_img-removebg-preview (1).png")

}

function setup()
{
  createCanvas(600,600);
  background = createSprite(200,100,100,150);
  background.addImage(backgroundImage);
  background.scale = 2.5

  man= createSprite(50,400,60,50);
  man.addImage(manstandingimage);
  
  score = 0

  ObstaclesGroup=new Group();
  appleGroup = new Group() 
  pineAppleGroup = new Group();
  watermelonGroup = new Group();
  jackFruitGroup = new Group()
  arrowGroup = new Group();
}

function draw() {
  
   background.velocityX = -3
  
   if (background.x < 0){
   background.x = background.width/2
   }

  if (keyDown ("M")){
      createArrow()
  }

  man.y = World.mouseY

  var select_fruit = Math.round(random(1,4))
  if (World.frameCount % 80 == 0){
  if (select_fruit == 1){
      apple()
  }   else if (select_fruit==2) {
      pineApple()
  }   else if (select_fruit==3) {
      watermelon()
  }   else {
      jackfruit()
  }
  }

  if (arrowGroup.isTouching(appleGroup)){
      arrowGroup.destroyEach();
      appleGroup.destroyEach();
      score = score + 2
  }
  
  if (arrowGroup.isTouching(pineAppleGroup)){
      arrowGroup.destroyEach();
      pineAppleGroup.destroyEach();
      score = score + 4
  }

  if (arrowGroup.isTouching(watermelonGroup)){
      arrowGroup.destroyEach();
      watermelonGroup.destroyEach();
      score = score + 1
  }

  if (arrowGroup.isTouching(jackFruitGroup)){
      arrowGroup.destroyEach();
      jackFruitGroup.destroyEach();
      score = score + 3
  }



drawSprites()
      text("Score:" + score, 500,50 )
  
}


function createArrow() {
  var arrow = createSprite(10,20,100,350);
 arrow.addImage(arrowImage); 
 arrow.x = 360
 arrow.velocityX = 7
 arrow.scale = 0.1;
 arrow.lifetime = 100;
 arrow.y = man.y
 arrowGroup.add(arrow);
}

function apple() {

 var apple = createSprite(0,Math.round(random(20,370)),10,10) 
apple.addImage(appleimage)
apple.velocityX = 4
apple.lifetime = 150;
apple.scale = 0.2;
appleGroup.add(apple);
}

function pineApple() {

var pineApple = createSprite(0,Math.round(random(20,370)),10,10)
pineApple.addImage(pineAppleImage);
pineApple.velocityX = 4
pineApple.lifetime = 150
pineApple.scale = 0.2
pineAppleGroup.add(pineApple)
}

function watermelon () {

var watermelon = createSprite(0,Math.round(random(20,370)),10,10)
watermelon.addImage(watermelonImage)
watermelon.velocityX = 4
watermelon.lifetime = 150
watermelon.scale = 0.2
watermelonGroup.add(watermelon)
}

function jackfruit () {

var jackfruit = createSprite(0,Math.round(random(20,370)),10,10)
jackfruit.addImage(jackFruitImage)
jackfruit.velocityX = 4
jackfruit.lifetime = 150
jackfruit.scale = 0.2
jackFruitGroup.add(jackfruit)
}