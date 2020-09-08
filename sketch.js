
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,100,10);
ground=new Ground(400,650,800,20);
dustbin=new Dustbin(600,630,200,20);
side1=new Dustbin(500,590,20,100);
side2=new Dustbin(700,590,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  paper.display();
  ground.display();
  dustbin.display();
  side1.display();
  side2.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position, {x:60,y:-80} );
}
}



