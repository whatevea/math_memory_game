class Scene3 extends Phaser.Scene
{
constructor()
{
super("Scene3");

}

init(data){

			this.cardNums=(data.data);
			this.scoreNum=data.score;
			console.log(this.cardNums);

}

	preload(){
	}





	 create() {
		//score box
			this.score=this.add.text(_data.gameWidth-100, 30, `Score : ${this.scoreNum}`, _data.basic_text_style);

			//get Question Type
			const qns=genQuestionType();
			//question1 module
			if (qns==="Arthmetic"){this.runMathGame()}
			//question2 module
			else if(qns==="Memory") {this.runMemoryGame()}
			//check right wrong

			//update score

			//update cardNum array

			//delete game screen or restart this scene with score


			
			}




	update(){}



runMemoryGame(){
	//text about question
	const text=this.add.text(_data.gameWidth/4, 60, 'Whats the Card b4 last one?', _data.title_text_style);
	
	//store answer somewhere
	const ans=this.cardNums[0];	
	

	//generate options text
	this.add.text(100, 130, 'Options', _data.basic_text_style);
	//shuffled options generate
	let options=shuffle([ans,ans+getRandomNum(0,10),ans+getRandomNum(0,10),ans+getRandomNum(0,10)]);
	
	//loop through each array and show them making them interactive	
	this.showOptions(options,ans,200);


}


runMathGame(){
		const text=this.add.text(_data.gameWidth/4, 60, 'Perform this Calcultion on last Card?', _data.title_text_style);
		//generate number to add
		const numToAdd=getRandomNum(1,10);
		//show the card
		const card1=new Cards(this,200,150,0.3,`+${numToAdd}`);
		card1.show();
		//calculate the ans
		const ans= parseInt(this.cardNums[1])+numToAdd;
		console.log("Math ans is "+ans);
		//generate options 
		let options=shuffle([ans,ans+getRandomNum(0,10),ans+getRandomNum(0,10),ans+getRandomNum(0,10)]);
		console.log(options);
		//show options
		this.add.text(80, 300, 'Options', _data.basic_text_style);

		this.showOptions(options,ans,340);

		//decided win or lose

}

win(ans){
	this.scoreNum=this.scoreNum+10;
	this.score.text=`Score : ${this.scoreNum || 0}`;
	//update cardnums arrary
	this.cardNums.shift();
	this.cardNums.push(ans);
	console.log(`Now the new array is ${this.cardNums}`);
	//restart the scene
	this.scene.start("Scene3",{"data":this.cardNums,score:this.scoreNum})

}

lose(){
//show lost screen for 2 seconds and send back to Scene1
window.alert("You lost your final score was "+this.scoreNum);
this.scene.start("Scene1");
}



showOptions(options,ans,y){
	options.forEach((item,index)=>{

		//generate interactive text 
		console.log(item);
		let opt=this.add.text((index*100)+50, y, item, _data.title_text_style);
		opt.setInteractive();
		opt.on("pointerdown",function(){
		if (this.text==ans){this.scene.win(ans)}

		else{this.scene.lose()}
	})
	})
}
}
