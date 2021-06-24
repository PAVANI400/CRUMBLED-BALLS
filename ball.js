class ball{
    constructor(x,y,radius,isStatic){
    
    
       this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    this.paper = loadImage("paper.png")
}
    

display(){
    imageMode(CENTER);
    fill("blue");
   image(this.paper,this.body.position.x,this.body.position.y,30,20);
}
}