class tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.Rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");

        World.add(world,this.body);
    }

    display() {
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        var angle = this.body.angle;
        push();
        strokeWeight(3);
        stroke("red");
        translate(posX , posY);
        rotate(angle);
        this.image(image,0,0,this.width,this.height);
        pop();
    }
}