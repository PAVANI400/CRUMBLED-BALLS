
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//box1 = new box(500,200,270,20);
	//box2 = new box(400,200,20,100);
	box3 = new box(600,200,100,100);
	//Create the Bodies Here.

	ground1 = new ground(200,640,1000,20);
    ball1 = new ball(100,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 // box1.display();
  ground1.display();
  //box2.display();
  box3.display();
  ball1.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode ===  UP_ARROW){
		Matter.Body.setPosition(ball1.body,{x:600,y:-85})
	}
}