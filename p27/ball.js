class Ball {
    constructor(x,y,radius){
        var options = {
            restitution : 0,
            friction : 0,
            density : 0.6

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.color = rgb(random(100,250),random(100,250),random(150,200));
        World.add(world,this.body);
    }

    display(){
       
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.radius);
        pop();
    }


}