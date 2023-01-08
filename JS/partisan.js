class partisan extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.trigger={physics:{resistance:true,gravity:true}}
		this.timers=[0,0]
		this.size=1
		this.dead=false
	}
	update(){
		super.update()
		this.position.x=constrain(this.position.x,0,game.edge.x)
		this.position.y=min(this.position.y,game.edge.y)
		if(this.dead){
			this.status=1
		}
		if(this.trigger.physics.resistance){
			this.velocity.x*=(1-physics.resistance)
		}
		if(this.trigger.physics.gravity){
			this.velocity.y+=physics.gravity
		}
		for(let a=0,la=this.timers.length;a<la;a++){
			if(this.timers[a]>0){
				this.timers[a]--
			}
		}
	}
}