class Paper{

constructor(x,y){
    var options ={
        isStatic : false,
        restitution :0.3,
        density:1.2,
        friction : 0,
    }

    this.body = Body.circle(200,100,20);
    World.add(world,this.body);
    this.image = loadImage("paper.png");




}

};