const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;
var thro;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,80,30);
	mango2=new mango(990,110,35);
	mango3=new mango(1200,125,35);
	mango4=new mango(1050,190,25);
	mango5=new mango(950,220,29);
	mango6=new mango(1200,250,25);
	mango7=new mango(1130,170,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone (242,412,5);
	
	launcherObject = new LauncherObject(stoneObj.body,{x:235,y:420});


	Engine.run(engine);

}

function draw() {


  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

   detectollisition(stoneObj, mango1) ;
detectollisition(stoneObj, mango2) ;
detectollisition(stoneObj, mango3) ;
detectollisition(stoneObj, mango4) ;
detectollisition(stoneObj, mango5) ;
detectollisition(stoneObj, mango6) ;
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();



  launcherObject.display();

  groundObject.display();
stoneObj.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
	

}

function mouseReleased(){
	launcherObject.fly();
	
}

function detectollisition (lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
	textSize(20);
	text("Press Space to get a second Chance to Play!!",20,40);
}
