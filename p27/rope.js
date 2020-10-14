class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointA : { x:offsetX,y:10},
            pointB : { x:0,y:-25},
            stiffness : 1
          
        }
        this.chain = Constraint.create(options);
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.offsetX =offsetX;
        this.offsetY = 10;
        World.add(world,this.chain);
    }
    display(){
        var posA = {x:this.bodyA.position.x+this.offsetX,y:this.bodyA.position.y+this.offsetY};
        var posB = this.bodyB.position;
        strokeWeight(2);
        
        stroke("white");
        line(posA.x,posA.y,posB.x,posB.y-23);
    }


}