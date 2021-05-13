var bullet ,wall;
var speed,weight;
var thickness



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=randam(223,321)
  weight = randam(30,52)
  thickness = randam(22,83)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet = createSprite(50,200,50,50)
  bullet.velocity.X = speed;3
  wall = createSprite(1500,200,60,Height/2)
  wall.shapeColour(80,80,80)

Damage = 0.5*bulletweight*bulletspeed*bulletspeed/thickneesofwall*thickneesofwall*thickneesofwall







}