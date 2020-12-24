class mango {
    constructor(x,y,radius) {
        
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    
    display() {
    var posX = this.body.position.x;
    var posY = this.body.position.y;
    var radius = this.body.radius;
    var angle = this.body.angle;
    push();
    strokeWeight(3);
    stroke("red");
    translate(posX , posY);
    rotate(angle);
    this.image(image,0,0,radius);
    pop();
    ellipseMode(RADIUS);
    }
}