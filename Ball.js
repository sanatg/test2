class Ball{
    constructor(x,y){
    var options={
    velocityX = 2
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.radius = 50
    
    
    World.add(world,this.body)
    
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle);
    ellipseMode(RADIUS);
    fill("red"); 
ellipse(0,0,this.radius);
   // rect(0, 0, this.width, this.height);
    pop();


    }