class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slingImage3 = loadImage("sprites/sling3.png");
    }

    display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(7);
        stroke(48,22,8);
        line(pointA.x-20, pointA.y, pointB.x, pointB.y);
        pop();
        push();
        strokeWeight(8);
        stroke(84,39,15);
        line(pointA.x-20, pointA.y, pointB.x-40, pointB.y);
        pop();
        image(this.slingImage3,pointA.x-20,pointA.y-10,15,30);
    }
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    reappear(body){
        this.sling.bodyA = body; 
    }
}
