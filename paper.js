class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic:false , 
        restitution:0.3,
        friction:0.5,
        density:0.1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
     // ellipseMode(RADIUS);
      imageMode(CENTER)
      //fill("white");
    //  ellipse(pos.x, pos.y, this.radius);
    image(this.image, pos.x, pos.y, 200,200);
      pop();
    }
  };