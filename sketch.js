const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,370,800,20,option);
  World.add(world,ground);

 var options = {
   restitution : 1
 }

  ball = Bodies.circle(400,100,30,options);
  World.add(world,ball);
 
  console.log(ball);

}

function draw() {
  background(0);

  Engine.update(engine);  
  
   rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  drawSprites();
}
