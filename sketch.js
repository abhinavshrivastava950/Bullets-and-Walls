var bullet, wall, thickness ;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)
  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50, 200, 75, 10);
  wall = createSprite(1500, 200, thickness, height/2);

  bullet.velocityX = speed;

}

function draw() {
  background("black");  
 
 if(hascollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;
   if (damage > 10) {
     bullet.shapeColor = color("red");
   }

   if (damage < 10) {
     bullet.shapeColor = color("green");
   }

 }
 
 
  drawSprites();
}

function hascollided(Lbullet, Lwall) {
  bulletRightEdge=Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}
