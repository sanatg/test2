const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var ground;
var ball;
var ball2;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(500,200);
    ball2 = new Planet(470,200);
    ball3 = new Planet(540,200);
    ball4 = new Planet(630,200);


   
  // var ball_options = {
 //  restitution:2,
  // friction:100
/////////// }
 ////var ball2_options = {
//restitution:2,
///////friction:100
 
   /// World.add(world,ground);
   
   World.add(world,ball)
  
   World.add(world,ball2)
 
   World.add(world,ball3)
   
   World.add(world,ball4)
}

function draw(){
    background("black");
    Engine.update(engine);
    if(ball.velocityX = 2){
     ball.scale=ball.scale+1
    }
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    if (ball.istouching(ball2)) {
      ball2.visible = false
    }
    if (ball.istouching(ball3)) {
      ball3.visible = false
    }
    if (ball.istouching(ball4)) {
      ball4.visible = false
    }
    
    ///rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);
//rect(ball.position.x,ball.position.y,20,20)
///ellipseMode(RADIUS)
//ellipse(ball.position.x,ball.position.y,50,50)
//ellipse(ball2.position.x,ball2.position.y,10,10)

// object.scale=object.scale+1
  }


















