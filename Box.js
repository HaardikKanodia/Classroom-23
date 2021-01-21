class Box {
constructor(x,y,width,height) {
var option={
    'restitution':1.0
    //density:0.9,
    //friction:0.1,
    
}

    this.body=Bodies.rectangle(x,y,width,height,option);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

}
 display() {
    
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.x,this.width,this.height);



}



}