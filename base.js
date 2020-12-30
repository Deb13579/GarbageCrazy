class Base {
    constructor(x, y, width, height, radius) {
     /* var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
      }*/
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width
      this.height = height
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER)
      image(this.image, 0 , 0, this.width, this.height)
      pop();
    }
  };