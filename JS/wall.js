class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.enemies,entities.players]
        switch(this.type){
            case 3:
                this.position.y+=game.tileSize*0.3
                this.width-=10
                this.height*=0.4
            break
            case 5:
                this.timers=[0]
            break
            case 6:
                this.z=1
            break
            case 26:
                this.position.y-=game.tileSize*0.375
                this.width*=1.5
                this.height*=0.25
            break
        }
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
            case 2:
                this.layer.fill(150,this.fade)
                this.layer.rect(-this.width/2+1.5,0,3,this.height)
                this.layer.rect(this.width/2-1.5,0,3,this.height)
                this.layer.rect(0,-this.height/2+1.5,this.width,3)
                this.layer.rect(0,this.height/2-1.5,this.width,3)
                for(let a=0,la=this.width/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(-this.width/2+this.width*(a+1)/(la+1),0,6,this.height)
                }
                for(let a=0,la=this.height/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(0,-this.height/2+this.height*(a+1)/(la+1),this.width,6)
                }
            break
            case 3:
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.stroke(255,145,0,this.fade)
                    this.layer.strokeWeight(8)
                    this.layer.fill(255,145,0,this.fade)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-16,6,-this.width/2+this.width*a/la+game.tileSize/2+16,6)
                    this.layer.triangle(-this.width/2+this.width*a/la+game.tileSize/2-12,6,-this.width/2+this.width*a/la+game.tileSize/2+12,6,-this.width/2+this.width*a/la+game.tileSize/2,-19)
                    this.layer.noStroke()
                    this.layer.fill(255,this.fade)
                    this.layer.quad(-this.width/2+this.width*a/la+game.tileSize/2-12,-3,-this.width/2+this.width*a/la+game.tileSize/2+12,-3,-this.width/2+this.width*a/la+game.tileSize/2+8,-12,-this.width/2+this.width*a/la+game.tileSize/2-8,-12)
                }
            break
            case 4:
                this.layer.fill(0,125,0,this.fade)
                this.layer.noStroke()
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-9,-11,30,30)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2+9,-9,30,30)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2-8,10,30,30)
                    this.layer.ellipse(-this.width/2+this.width*a/la+game.tileSize/2+11,13,30,30)
                }
            break
            case 5:
                this.layer.fill(225,this.fade*min(1,max(2-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.stroke(255,this.fade*min(1,max(2-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.strokeWeight(8)
                this.layer.rect(0,0,this.width-8,this.height-8,8)
            break
            case 6:
                this.layer.fill(100+this.z*50,this.fade)
                this.layer.rect(-this.width/2+1.5,0,3,this.height)
                this.layer.rect(this.width/2-1.5,0,3,this.height)
                this.layer.rect(0,-this.height/2+1.5,this.width,3)
                this.layer.rect(0,this.height/2-1.5,this.width,3)
                for(let a=0,la=this.width/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(-this.width/2+this.width*(a+1)/(la+1),0,6,this.height)
                }
                for(let a=0,la=this.height/game.tileSize*2-1;a<la;a++){
                    this.layer.rect(0,-this.height/2+this.height*(a+1)/(la+1),this.width,6)
                }
                this.layer.stroke(200+this.z*55,this.fade)
                this.layer.fill(200+this.z*5,0,0,this.fade)
                this.layer.strokeWeight(3)
                regPoly(this.layer,0,0,8,12,22.5)
                this.layer.line(-3,-3,3,3)
                this.layer.line(-3,3,3,-3)
            break
            case 7:
                this.layer.fill(180,120,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(90,60,0,this.fade)
                for(let a=0,la=this.height/game.tileSize*4;a<la;a++){
                    this.layer.rect(0,-this.height/2+this.height*a/la+game.tileSize/8,this.width,1.5)
                }
            break
            case 8:
            break
            case 9:
            break
            case 10:
            break
            case 11:
                this.layer.fill(150,75,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(0,200,0,this.fade)
                this.layer.rect(0,-this.height/2+8,this.width,16)
            break
            case 12:
            break
            case 13:
            break
            case 14:
            break
            case 15:
            break
            case 16:
            break
            case 17:
            break
            case 18:
            break
            case 19:
            break
            case 20:
            break
            case 21:
                this.layer.translate(0,sin(this.time*4)*3)
                this.layer.fill(255,0.4*this.fade)
                this.layer.noStroke()
                this.layer.rotate(this.time*3)
                for(let a=0;a<10;a++){
                    this.layer.arc(0,0,this.width+10,this.height+10,a*36-9,a*36+9)
                    this.layer.arc(0,0,this.width,this.height,a*36-3,a*36+3)
                }
                this.layer.rotate(this.time*-3)
                this.layer.fill(255,125,0,this.fade)
                this.layer.noStroke()
                this.layer.ellipse(0,0,25,25)
                this.layer.stroke(0,255,0,this.fade)
                this.layer.strokeWeight(5)
                this.layer.noFill()
                this.layer.bezier(0,-12,-2,-16,-5,-18,-7,-19)
                this.layer.bezier(0,-12,2,-14,6,-15,8,-15)
                this.layer.bezier(0,-12,-1,-13,-3,-10,-4,-6)
                this.layer.bezier(0,-12,3,-14,5,-8,10,-3)
                this.layer.translate(0,sin(this.time*4)*-3)
            break
            case 22:
            break
            case 23:
            break
            case 24:
            break
            case 25:
            break
            case 26:
                this.layer.fill(100+this.z*50,this.fade)
                this.layer.rect(-this.width/2+1.5,0,3,this.height)
                this.layer.rect(this.width/2-1.5,0,3,this.height)
                this.layer.rect(0,-this.height/2+1.5,this.width,3)
                this.layer.rect(0,this.height/2-1.5,this.width,3)
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
		super.update()
        switch(this.type){
            case 5:
                if(this.timers[0]>0){
                    this.timers[0]++
                    if(this.timers[0]>=240){
                        this.timers[0]=0
                    }
                }
            break
            case 6:
                if(this.time%180<30){
                    this.z=round(this.z*30-1)/30
                }else if(this.time%180>=90&&this.time%180<120){
                    this.z=round(this.z*30+1)/30
                }
            break
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0&&!(a==1&&this.type==1)&&!(this.type==5&&this.timers[0]>30)&&!(this.type==6&&this.z<0.5)){
                    switch(this.type){
                        case 3:
                            this.collide[a][b].dead=true
                        break
                        case 5:
                            if(this.timers[0]==0){
                                this.timers[0]++
                            }
                        break
                        case 6:
                            if(this.z==0.5){
                                this.collide[a][b].dead=true
                            }
                        break
                        case 21:
                            transition.trigger++
                            transition.scene='level'
                            transition.zone=game.zone+1
                        break
                    }
                    if(boxCollideBox(this,this.collide[a][b])==0){
                        this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                        this.collide[a][b].velocity.y=0
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==1){
                        this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                        if(this.type==4){
                            this.collide[a][b].velocity.y*=-0.95
                        }else{
                            this.collide[a][b].velocity.y=0
                        }
                        this.collide[a][b].velocity.x*=(1-physics.friction)
                        this.collide[a][b].timers[0]=5
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==2){
                        this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                        this.collide[a][b].velocity.x=0
                        this.collide[a][b].velocity.y*=(1-physics.friction)
                        if(a==0&&this.collide[a][b].mode==0){
                            this.collide[a][b].mode=1
                        }
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==3){
                        this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                        this.collide[a][b].velocity.x=0
                        this.collide[a][b].velocity.y*=(1-physics.friction)
                        if(a==0&&this.collide[a][b].mode==1){
                            this.collide[a][b].mode=0
                        }
                    }
                }
            }
        }
	}
}