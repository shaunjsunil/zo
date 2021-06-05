var groundi;
var ground;
var person;
var wall1;
var wall2;
var wall3;
var wall4;
var personi
function preload(){
groundi=loadImage("grassland.png")
personi=loadImage("afrobluepng.png")
}
function setup(){
    createCanvas(800, 700);
   ground=createSprite(1600,1500,200,200)
   person=createSprite(500,400,50,50)
   person.addImage(personi);
   person.scale=0.4;
  // person.debug=true;
   person.setCollider("rectangle",0,0,130,130)
   wall1=createSprite(835,2941,6000,20)
   wall2=createSprite(696 ,46,6000,20)
   wall3=createSprite(3520,2213,20,6000)
   wall4=createSprite(-330,384,20,6000)
   wall1.visible=false;
   wall2.visible=false;
   wall3.visible=false;
   wall4.visible=false;
ground.addImage(groundi)
ground.scale=6;
console.log(person.width)
}
function draw(){
background("lightblue")
if(keyDown("right")){
ground.x=ground.x-20;
}
if(keyDown("left")){
ground.x=ground.x+20;
}
if(keyDown("up")){
ground.y=ground.y+20;     
}
if(keyDown("down")){
ground.y=ground.y-20;
 }
if(person.isTouching(wall2) && keyDown("up")){
ground.y=ground.y-20;
wall2.y=wall2.y-20;
wall1.y=wall1.y-20;
wall3.y=wall3.y-20
wall4.y=wall4.y-20
}
if(person.isTouching(wall1) && keyDown("down")){
ground.y=ground.y+20;
 wall2.y=wall2.y+20;
 wall1.y=wall1.y+20;
 wall3.y=wall3.y+20
 wall4.y=wall4.y+20
    }
if(person.isTouching(wall3) && keyDown("right")){
 ground.x=ground.x+20;
 wall2.x=wall2.x+20;
 wall1.x=wall1.x+20;
wall3.x=wall3.x+20
 wall4.x=wall4.x+20
 }
if(person.isTouching(wall4) && keyDown("left")){
 ground.x=ground.x-20;
wall2.x=wall2.x-20;
 wall1.x=wall1.x-20;
wall3.x=wall3.x-20
 wall4.x=wall4.x-20
 }
 if(keyDown("right")){
 wall1.x=wall1.x-20;
 }
if(keyDown("left")){
wall1.x=wall1.x+20;
 }
if(keyDown("up")){
 wall1.y=wall1.y+20;     
}
if(keyDown("down")){
 wall1.y=wall1.y-20;
 }
if(keyDown("right")){
wall2.x=wall2.x-20;
}
if(keyDown("left")){
 wall2.x=wall2.x+20;
}
if(keyDown("up")){
wall2.y=wall2.y+20;     
}
if(keyDown("down")){
wall2.y=wall2.y-20;
}
if(keyDown("right")){
 wall3.x=wall3.x-20;
}
if(keyDown("left")){
 wall3.x=wall3.x+20;
}
if(keyDown("up")){
wall3.y=wall3.y+20;     
 }
if(keyDown("down")){
    wall3.y=wall3.y-20;
}
if(keyDown("right")){
 wall4.x=wall4.x-20;
 }
if(keyDown("left")){
wall4.x=wall4.x+20;
}
if(keyDown("up")){
 wall4.y=wall4.y+20;     
}
if(keyDown("down")){
 wall4.y=wall4.y-20;
}                                                                           
drawSprites(); 
}