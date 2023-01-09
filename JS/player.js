class player extends partisan{
    constructor(layer,x,y){
        super(layer,x,y,0,30,50)
        this.offset={position:{x:0,y:0}}
        this.anim={direction:0,rate:0}
        this.movement={speed:0.4,jump:12}
    }
    display(){
        if(this.fade>0&&this.size>0){
            this.layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
            this.layer.scale(this.size)
            this.layer.fill(255,235,0,this.fade)
            this.layer.noStroke()
            this.layer.ellipse(-cos(this.anim.rate*5)-8,22,16,16)
            this.layer.ellipse(cos(this.anim.rate*5)+8,22,16,16)
            this.layer.translate(0,sin(this.time*10)*2)
            this.layer.ellipse(0,-15,30,30)
            this.layer.ellipse(0,5,18,28)
            this.layer.translate(-5+max(0,this.anim.direction)*10,5)
            this.layer.rotate(sin(this.time*10)*20)
            this.layer.ellipse(-10+max(0,this.anim.direction)*20,0,20,14)
            this.layer.rotate(sin(this.time*10)*-20)
            this.layer.translate(10-max(0,this.anim.direction)*10+min(0,this.anim.direction)*10,0)
            this.layer.rotate(sin(this.time*10)*-20)
            this.layer.ellipse(10+min(0,this.anim.direction)*20,0,20,14)
            this.layer.rotate(sin(this.time*10)*20)
            this.layer.translate(-5-min(0,this.anim.direction)*10,-5)
            this.layer.fill(255,125,0,this.fade)
            this.layer.ellipse(this.anim.direction*16,-10,20,12)
            this.layer.stroke(0,this.fade)
            this.layer.strokeWeight(1)
            this.layer.line(-9+this.anim.direction*16,-10,9+this.anim.direction*16,-10)
            if(this.anim.direction>-0.7){
                this.layer.line(-4+this.anim.direction*24,-12,-4+this.anim.direction*24,-14-min(0,this.anim.direction+0.5)*10)
            }
            if(this.anim.direction<0.7){
                this.layer.line(4+this.anim.direction*24,-12,4+this.anim.direction*24,-14+max(0,this.anim.direction-0.5)*10)
            }
            if(this.anim.direction>-0.95){
                this.layer.strokeWeight(3+min(0,this.anim.direction+0.75)*15)
                this.layer.point(-4+this.anim.direction*12,-19)
            }
            if(this.anim.direction<0.95){
                this.layer.strokeWeight(3-max(0,this.anim.direction-0.75)*15)
                this.layer.point(4+this.anim.direction*12,-19)
            }
            this.layer.translate(0,sin(this.time*10)*-2)
            this.layer.scale(1/this.size)
            this.layer.translate(-this.position.x-this.offset.position.x,-this.position.y-this.offset.position.y)
        }
    }
    update(){
        if(this.dead&&this.fade<=0){
            transition.trigger=true
            transition.scene='level'
        }
        if(inputs.keys[0][0]||inputs.keys[1][0]){
            this.velocity.x-=this.movement.speed
            if(this.anim.direction>-1){
                this.anim.direction-=0.1
            }
        }
        if(inputs.keys[0][1]||inputs.keys[1][1]){
            this.velocity.x+=this.movement.speed
            if(this.anim.direction<1){
                this.anim.direction+=0.1
            }
        }
        if(!inputs.keys[0][0]&&!inputs.keys[1][0]&&!inputs.keys[0][1]&&!inputs.keys[1][1]){
            this.anim.direction*=0.95
        }
        if((inputs.keys[0][2]||inputs.keys[1][2])&&this.timers[0]>0){
            this.timers[0]=0
            this.velocity.y=-this.movement.jump
            this.timers[1]=1
        }
        stage.focus.x=game.edge.x/2
        stage.focus.y=game.edge.y/2
        super.update()
    }
}