class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.players]
        switch(this.type){
            case 3:
                this.position.y+=game.tileSize*0.3
                this.height*=0.4
            break
        }
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
			case 1:
				this.layer.fill(200,this.fade)
				this.layer.rect(0,0,this.width,this.height)
			break
            case 2:
                this.layer.fill(150,this.fade)
                for(let a=0,la=this.width/game.tileSize*2+1;a<la;a++){
                    this.layer.rect(-this.width/2+this.width*a/(la-1),0,6,this.height+6,3)
                }
                for(let a=0,la=this.height/game.tileSize*2+1;a<la;a++){
                    this.layer.rect(0,-this.height/2+this.height*a/(la-1),this.width+6,6,3)
                }
            break
            case 3:
                for(let a=0,la=this.width/game.tileSize;a<la;a++){
                    this.layer.stroke(255,145,0,this.fade)
                    this.layer.strokeWeight(8)
                    this.layer.fill(255,145,0,this.fade)
                    this.layer.line(-this.width/2+this.width*a/la+game.tileSize/2-16,4,-this.width/2+this.width*a/la+game.tileSize/2+16,4)
                    this.layer.triangle(-this.width/2+this.width*a/la+game.tileSize/2-12,4,-this.width/2+this.width*a/la+game.tileSize/2+12,4,-this.width/2+this.width*a/la+game.tileSize/2,-25)
                    this.layer.noStroke()
                    this.layer.fill(255,this.fade)
                    this.layer.quad(-this.width/2+this.width*a/la+game.tileSize/2-12,-6,-this.width/2+this.width*a/la+game.tileSize/2+12,-6,-this.width/2+this.width*a/la+game.tileSize/2+8,-16,-this.width/2+this.width*a/la+game.tileSize/2-8,-16)
                }
            break
            case 4:
            break
            case 5:
            break
            case 6:
            break
            case 7:
            break
            case 8:
            break
            case 9:
                this.layer.fill(150,75,0,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(0,200,0,this.fade)
                this.layer.rect(0,-this.height/2+8,this.width,16)
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
		super.update()
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0){
                    switch(this.type){
                        case 3:
                            this.collide[a][b].dead=true
                        break
                    }
                    if(boxCollideBox(this,this.collide[a][b])==0){
                        this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                        this.collide[a][b].velocity.y=0
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==1){
                        this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                        this.collide[a][b].velocity.y=0
                        this.collide[a][b].velocity.x*=(1-physics.friction)
                        this.collide[a][b].timers[0]=5
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==2){
                        this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                        this.collide[a][b].velocity.x=0
                        this.collide[a][b].velocity.y*=(1-physics.friction)
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==3){
                        this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                        this.collide[a][b].velocity.x=0
                        this.collide[a][b].velocity.y*=(1-physics.friction)
                    }
                }
            }
        }
	}
}