//press to start
t=0
draw =__=> {
  createCanvas(c=600,550);
  background(5,56,77);
  blendMode(DIFFERENCE);
  translate(c/2,c/2);
  for(i=1;i<25;i++){
    rotate(PI/12);
    fill(200);
    ellipse(2,1,i*12*sin(t+PI/6*i),i*20);
    rect(10,20,30,40)
    
  }
  t+=PI/300;
}