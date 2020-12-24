class elasticSling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.02,
            length: 5
        }
        this.elasticSling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.elasticSling);

    }

    fly() {
        this.elasticSling.bodyA = null;
    }

    attach() {
        bodyA = body;
    }

    display(){
     if(this.elasticSling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }
    
}