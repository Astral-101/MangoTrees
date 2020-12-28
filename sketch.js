
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var boy, boyImage;
var stone;
var connector;
var tree, treeImage;
var mango1, mango2, mango3;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 675, 1200, 5)

	stone = new Stone(155, 600, 50, 50);

	boy = createSprite(200, 625, 50, 50);
	boy.addImage("boy", boyImage);
	boy.scale = 0.08;

	connector = new Connector(stone.body, {x: 155, y: 580})

	mango1 = new Mango(650, 320, 50, 50);

	mango2 = new Mango(850, 300, 50, 50)

	mango3 = new Mango(740, 300, 50, 50)

	tree = createSprite(750, 500, 300, 300);
	tree.addImage("tree", treeImage);
	tree.scale = 0.3
	tree.depth = -1;








	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  ground.display();
  connector.display();
  mango1.display();
  mango2.display();
  mango3.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);

  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	connector.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if (distance<=lmango.width+lstone.width){
			Matter.Body.setStatic(lmango.body,false);

		}



}



