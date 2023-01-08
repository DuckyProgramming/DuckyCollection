class player extends partisan{
    constructor(layer,x,y){
        super(layer,x,y,0,45,135)
        this.offset={position:{x:0,y:0}}

        this.movement={speed:0.4,jump:12}

        this.trigger.gravity=false
    }
    display(){
        if(this.fade>0&&this.size>0){
            this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
            this.layer.scale(this.size)
            this.layer.scale(1/this.size)
            this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
        }
    }
    update(){
        super.update()
        if(inputs.keys[0][0]||inputs.keys[1][0]){
            this.velocity.x-=this.movement.speed
        }
        if(inputs.keys[0][1]||inputs.keys[1][1]){
            this.velocity.x+=this.movement.speed
        }
        if((inputs.keys[0][2]||inputs.keys[1][2])&&this.timers[0]>0){
            this.timers[0]=0
            this.velocity.y=-this.movement.jump
            this.timers[1]=1
        }
        stage.focus.x=this.position.x
        stage.focus.y=this.position.y
    }
}