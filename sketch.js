var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box1 = Bodies.rectangle(width/2, 650, 200, 20, {isStatic : true});
	World.add(world, box1);
	box2 = createSprite(310, 600, 20, 100, {isStatic : true});
	World.add(world, box2);
	box3 = createSprite(490, 600, 20, 100, {isStatic : true});
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rectMode(CENTER);
  rect(box1.position.x, box1.position.y, 200, 20);
  rect(box2.position.x, box2.position.y, 20, 100);
  rect(box3.position.x, box3.position.y, 20, 100);
  
  drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody, false);
	}
}