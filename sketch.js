var player, personImage;
var dragon, dragonImage;
var fireball, fireballImage;
var obstaclesGroup;
var background;
var leaderboard;
var ground, invisibleGround, groundImage;
var star, starImage;
var score;

function setup() {
   createCanvas(800, 400);

   ground = createSprite(200,350,400,20);
   ground.addImage("ground",groundImage);
   ground.x = ground.width /2;
}

function preload() {
   dragonImage = loadImage("dragon2.png");
   groundImage = loadImage("ground2.png");
}

function draw() {
   background(180);
   score = 0;
   text("Score: "+ score, 700,50);

   dragon = createSprite(200, 300);
   dragon.addImage("dragon", dragonImage);
   dragon.scale = 0.6;
   

   ground.velocityX = -5;
   if (ground.x < 0){
      ground.x = ground.width/2;
    }

   drawSprites();
   
}