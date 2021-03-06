const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var paper1,paper_image;
var stick1,stick2,stick3;
var ground,invisibleGround,ground2,ground3,ground4;

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
  world = engine.world;
  
  paper1 = new Paper(200,350,20,20);
  paper1.scale = 10;

  ground = new Ground(200,400,1000,10);
  
  stick1 = new Stick(447, 339, 15,102);
  stick2 = new Stick(533, 339, 15,102);
  stick3 = new Stick(490, 387, 100,15);
  
  ground2 = new Ground(447, 341, 15,70);
  ground3 = new Ground(533, 341, 15,70);
}


function draw() {
  background(0);            
  Engine.update(engine); 

  paper1.display();
  keyPressed();
  ground.display();
  ground2.display();
  ground3.display();
  stick1.display();
  stick2.display();
  stick3.display();
 
  drawSprites();
  
}


function keyPressed(){
  if(keyCode === 38 && paper1.body.position.x < 320){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.0009,y:-0.0019});
  }
}