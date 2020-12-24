class groundandboyHand {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.Rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display() {
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        strokeWeight(3);
        stroke("red");
        translate(posX , posY);
        rect(0,0,this.swidth,this.height);
    }
}