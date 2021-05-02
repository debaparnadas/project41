class Drops {
    constructor(x,y,radius) {
        var options = {
            friction: 0.001,
            restitution: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        this.radius = 5;
        World.add(world,this.rain);
    }

    update() {
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
        } 
    }

    display() {
        var pos = this.rain.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}