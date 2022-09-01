class Cards {
	constructor(scene,x,y,size,num){
		this.scene=scene;
		this.x=x;
		this.y=y;
		this.size=size;
		this.num=num;
	}

	show(){
	let number_text_style={fontFamily: 'coc-font' ,
	fill: '#736372',
	fontSize:this.size*60}

	this.card =this.scene.add.image(this.x,this.y,"card").setOrigin(0,0).setScale(this.size);
	this.number=this.scene.add.text(this.x+(this.card.displayWidth/4), this.y+(this.card.displayHeight/4), this.num, number_text_style);
	}
	destroy(){
		this.card.destroy();
		this.number.destroy();
	}





}