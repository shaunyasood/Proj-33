class Snow{
constructor(x, y, width, height) {
    var options = {
        'restitution':0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("snow4.webp");
    this.image.scale=0.2
    World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate (pos.x,pos.y)
    rotate (angle)
    this.image.scale=0.2
    image (this.image,this.body.position.x,this.body.position.y)

    pop ();
    
}
}