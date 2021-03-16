const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(450,390,900,20);
 
}

  function draw() {
    background("white"); 
   
    Engine.update(engine);
    
    ground.display();
  }
