const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine, world;
var ground, leftWall, rightWall;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Base(0, height - 10, width * 2, 20, "#8d6e63", true);
  leftWall = new Base(200, height / 2+50, 500, 100, "#8d6e63", true);
  rightWall = new Base(width - 200, height / 2 + 50, 500, 100, "#8d6e63", true);

  bridge = new Bridge(17, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width - 400, height / 2 + 10, 40, 20, "#8d6e63", true);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 40, 40);
    stones.push(stone);
  }

  frameRate(80);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  leftWall.show();
  rightWall.show();
  bridge.show();
  for (var stone of stones) {
    stone.show();
  }


}
