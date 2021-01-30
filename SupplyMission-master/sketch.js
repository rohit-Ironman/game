const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world; 
var player; 
var ground; 
var obstacle1, obstacle2, obsacle3, obstacle4, obstacle5, obstacle6; 


function setup(){

    engine = Engine.create();
	world = engine.world; 

	player = new Player(200, 300); 
	ground = new Ground(300, 350, 25000, 20); 
	obstacle1 = new Obstacle(1000,300);
	obstacle2 = new Obstacle(350,300);
	obstacle3 = new Obstacle(540, 300); 
	obstacle4 = new Obstacle(770,300);
	obstacle5 = new Obstacle(1250,300);
	obstacle6 = new Obstacle(1470,300);   
}



function draw(){
	Engine.update(engine);
	createCanvas(1500,700);
	background("black"); 
	ground.display();
	obstacle1.display();
	player.display();
	obstacle2.display();
	obstacle3.display();
	obstacle4.display(); 
	obstacle5.display();
	obstacle6.display();

}