const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world; 
var player; 
var ground; 


function setup(){
    engine = Engine.create();
	world = engine.world; 
	player = new Player(200, 300); 
	ground = new Ground(300, 350, 25000, 20)
}



function draw(){
	Engine.update(engine);
	createCanvas(1500,700);
	background("black"); 
	ground.display();
player.display();
}