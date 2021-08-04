const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine, world
var backgroundImg
var snow=[]


function preload () {
backgroundImg = loadImage ("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
}


function draw() {
  Engine.update(engine)  
  background(backgroundImg);
  if (frameCount%10===0) {
    snow.push(new Snow(random(0,800),10,30,30))
  }
  //display the particles
  for (var j= 0; j<snow.length; j++){
    snow [j].display()
  }
  drawSprites();
}