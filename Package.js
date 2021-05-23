class Package{
    constructor(x,y){
       var option = {
           restitution : 0.8,
           friction : 1.0,
           density : 1.0
       }
       this.body =  Bodies.circle(width/2 , 200 , 5,options)
       World.add(world, this.body);
    }
    display(){
        var pos = this.boady.position;
        var angle = this.body.angle;
        Push();
        translate(pos.x, pos.y);
        DeviceRotationRate(angle);
        circleMode(CENTER);
        circle(0,0,this.width,this.height);
        Pop();
    }
}
