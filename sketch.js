
var bullet;
var wall;
var thickness;
var speed, weight;
var gameState="play";

function setup() {
  createCanvas(1600,400);

  thickness=random(22, 83);
  speed=random(223, 321);
  weight=random(30, 52);
  
wall = createSprite(1200, 200, thickness, height/2);
wall.shapeColor=(80, 80, 80);
bullet = createSprite(50, 200, 50, 50);
bullet.shapeColor="white";
bullet.velocityX=speed;


}

function draw() {
  background("black");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    thickness=0.5*weight*speed*speed/22500;
    if(thickness>180) {
    bullet.shapeColor="red";
    }
    if(thickness<180 && thickness>100) {
    bullet.shapeColor="yellow";
    }
    if(thickness<100) {
    bullet.shapeColor="green";
    }
    }
    
if(hasCollided(bullet, wall)) {
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);


if(damage>10) {
wall.shapeColor=color(255, 0, 0);
}
if(damage<10) {
wall.shapeColor=color(0, 255, 0);
}
}

  drawSprites();
}

function hasCollided(bullet, wall) {
bullletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge) {
return true;
}
return false;
}