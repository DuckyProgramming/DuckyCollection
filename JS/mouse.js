function mouseClicked(){
	updateMouse(graphics.main)
	switch(stage.scene){
		case 'menu':
			if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2,y:graphics.main.height/2},width:200,height:50})){
				transition.trigger=true
				transition.scene='level'
				transition.level=0
				transition.zone=0
			}
		break
	}
}