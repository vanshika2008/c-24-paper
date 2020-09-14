const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var paper1;
var stick1,stick2,stick3;
var ground;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  paper1 = new Paper(200,390,20,20);

  ground = new Ground(200,400,800,20);
  
  stick1 = new Stick(390, 365, 15,50);
  stick2 = new Stick(590, 365, 15,50);
  stick3 = new Stick(490, 382, 185,15);
}


function draw() {
  background(255,255,255);            
  Engine.update(engine); 

  paper1.display();
  keyPressed();
  ground.display();
  stick1.display();
  stick2.display();
  stick3.display();
 
  drawSprites();
  
}


function keyPressed(){
  if(keyCode === 32 && paper1.body.position.x < 300){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-5});
  }
  if(keyCode === 32 && paper1.body.position.x > 300){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:11});

  }
}









