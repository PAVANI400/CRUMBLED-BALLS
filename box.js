class box{
    constructor(x,y,width,height,isStatic){
    
    
       this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
         World.add(world,this.body);
         this.image = loadImage("dustbingreen.png")
    }
        


display(){
    imageMode(CENTER);
    fill("blue");
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}
}