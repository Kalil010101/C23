
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var ground;
var button;
var ground2;
var angle1 = 8;
var angle2 = 24;
var angle3 = 78;
var g1;
var g2;

function setup() {
 createCanvas(400,400);
engine = Engine.create()
world = engine.world;

var ballOptions = {
restitution:0.9,
frictionAir:0.01,
}
ball = Bodies.circle(100,10,20,ballOptions);
World.add(world,ball)

var options = {
isStatic:true
}
ground = Bodies.rectangle(200,400,400,20,options);
World.add(world,ground);


ground2 = Bodies.rectangle(150,300,100,20,options);
World.add(world,ground2);

g2 = Bodies.rectangle(150,300,100,20,options);
World.add(world,g2);

g1 = Bodies.rectangle(150,300,100,20,options);
World.add(world,g1);
}

function draw() {
background("black");
Engine.update(engine);

fill("purple")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20);

rectMode(CENTER)
fill("skyblue")
rect(ground.position.x,ground.position.y,400,20)

Matter.Body.rotate(g2,angle3);
push ()
translate (g2.position.x,g2.position.y,20)
rotate(angle3)
fill("red");
rect(0,0,100,20);
pop()

Matter.Body.rotate(ground2,angle1);
push ()
translate (ground2.position.x,ground2.position.y,20)
rotate(angle1)
fill("red");
rect(0,0,100,20);
pop()

Matter.Body.rotate(g1,angle2);
push ()
translate (g1.position.x,g1.position.y,20)
rotate(angle2)
fill("red");
rect(0,0,100,20);
pop()


}

var g1Op = {
  angle:15,
  }

  var g2Op = {
    angle:3,
    }

    var ground2Op = {
      angle:7,
      }

