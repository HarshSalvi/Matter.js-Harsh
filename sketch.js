
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var object1,object2,object3,object4;
var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object1= Bodies.rectangle(100,50,100,100);
 // console.log(object1);

  World.add(world,object1);
  object2= Bodies.rectangle(20,100,100,100);
  World.add(world,object2);
  object3= Bodies.circle(200,90,100);
  World.add(world,object3);

}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  fill("red")
    rect(object1.position.x,object1.position.y,50,50);
    fill("blue")
    rect(object2.position.x,object2.position.y,100,100);
    fill("yellow")
    circle(object3.position.x,object3.position.y,20);
}
