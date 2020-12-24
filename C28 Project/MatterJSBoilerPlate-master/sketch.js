
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy , boyImage;
var stone1;
var ground1;
var tree1;
var mango1 , mango2 , mango3 , mango4 , mango5;
var sling , boyHand1;


function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(200,500,30,100);
	boy.addImage("boy",boyImage);
	boy.scale = 0.15;

	engine = Engine.create();
	world = engine.world;

	ground1 = new groundandboyHand(width/2,650,width,5);

	tree1 = new tree(600,600,50,100);

	mango1 = new mango(590,570,12);
	mango2 = new mango(600,630,12);
	mango3 = new mango(590,640,12);
	mango4 = new mango(560,580,12);
	mango5 = new mango(625,610,12);

	boyHand1 = new groundandboyHand(200,510,4,4);
	stone1 = new stone(200,500,10,10);
	sling = new elasticSling(stone1.body,boyHand1.body)
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  
  stone1.display();
  boyHand1.display();
  sling.display();

  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  drawSprites();
}

function mouseDragged() {
	Matter.body.setPosition(stone1.body,{x:mouseY, y:mouseY})
}

function mouseReleased() {
	elasticSling.fly();
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY});
}

function detectCollision(stoneNo,mangoNo) {
	mangoBodyPosition = mangoNo.body.position;
	stoneBodyPosition = stoneNo.body.position;

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y);
	if(distance<=mangoNo+stoneNo) {
		Matter.Body.setStatic(mangoNo.body,false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone1.body,{x:200 , y:500})
	}
}