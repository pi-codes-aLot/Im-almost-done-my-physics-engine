class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.list = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
    if (this.body.velocity.x > 10 && this.body.position.x > 200){
      var local_variable;
      local_variable = [this.body.position.x, this.body.position.y];
      this.list.push(local_variable);
    }
   
    for (var i = 0; i < this.list.length; i++){
      image(this.smokeImage, this.list[i][0],this.list[i][1])
    }
    
    
  }
}
