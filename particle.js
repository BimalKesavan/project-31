class Particle {  
  constructor(x,y,r){
      var options ={
        restitution:0.4,
        isStatic:false
      }
      this.r=r;

      this.body = Bodies.circle(x,y,this.r,options)
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
      
  }
  updateY(){
    if(this.body.position.y > height){

      Matter.Body.setPosition(this.body, {x:width/2-10, y:width/2+10})
    }
  }
  display() {
    

    push();
    translate(this.body.position.x, this.body.position.y);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    this.updateY();
    ellipse(0, 0,this.r,this.r);
    pop();
  }
};  