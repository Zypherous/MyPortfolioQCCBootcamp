let josh;
let x = 200;
let y = 200;
let d = 40;
function setup(){
  createCanvas(500,500);
  background(77,77,77)
  josh = loadImage("JoshsPNG.PNG")
}

function draw(){
  background(120,0,0)
  fill("yellow");
  
  rect(20,20,50,50);

  stroke("red")
  line(220,10, 392, 48)
  strokeWeight(4);

  noStroke()
  fill('green');
  ellipse(219,123, 70,70);

  triangle(250,200, 256, 256, 200,200)
  stroke("black")
  for(var i = 1; i < 4 ; i++){
    line(0, 500/4*i, 500, 500/4*i)
    line(500/4*i, 0, 500/4*i, 500)
  }

  textSize(25)
  fill(255,76,90)
  // textFont(font1)
  text("Hello World of animation", 50, 100);
  image(josh, 150,150,34,34)


noStroke();
  ellipse(mouseX,mouseY,50,50)
  ellipse(mouseX+60,mouseY+60,50,50)

  if(mouseX>200){
    fill("green")
    ellipse(mouseX,mouseY, 200,20)
    x+=5
  }
  if(mouseY>200){
    fill("blue")
    ellipse(mouseX,mouseY, 200,20)
    y+=5
  }
  if(mouseY>200 && mouseX > 200){
    fill("black")
    ellipse(mouseX,mouseY, 200,200)
    x-=6;
    y-=6;
  }
  fill("yellow")
  ellipse(x,y,d,d)
}

