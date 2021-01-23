const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles =[];
var plinko =[];
var divisions =[];
var divisionHeight=300;
function setup() {
  createCanvas(800,750);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(400,740,800,25);
  for (var k = 0; k <=innerWidth; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10,divisionHeight))
  }
  for(var j = 40; j <=width; j=j+50){
    plinko.push(new Plinko(j,75,10));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175,10));
  }
  for(var j = 40; j <=width-20; j=j+50){
    plinko.push(new Plinko(j,275,10));
  }
  for(var j = 15; j <=width-30; j=j+50){
    plinko.push(new Plinko(j,375,10));
  }
}

function draw() {
  background(0,0,0);
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  } 
  for(var j = 0; j < particles.length; j++){
    particles[j].velocityY=-5;
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for (var j = 0; j < plinko.length; j++){
    plinko[j].display();
  }
  
  
  ground.display();
  
  drawSprites();
}
