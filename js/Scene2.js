class Scene2 extends Phaser.Scene
{
	constructor()
	{
	super("Scene2");

	}

	preload(){

	}

	create(){
		//top screen text
		const text=this.add.text(_data.gameWidth/4, 30, 'Remember these two cards', _data.title_text_style);

		//make 2 cards first and add in array 
		const cardNums=[getRandomNum(0,10),getRandomNum(0,10)]
		const card1=new Cards(this,150,100,0.3,cardNums[0]);
		const card2=new Cards(this,250,100,0.3,cardNums[1]);
		card1.show();
		card2.show();
		//start button to delete all cards and ask question 
		const next_btn=this.add.image(_data.gameWidth/3,300,"start_button").setOrigin(0,0).setScale(0.3);
		next_btn.setInteractive();
		next_btn.on('pointerdown', function () {
    	console.log("next button is clicked");
    	this.scene.scene.start('Scene3',{"data":cardNums,score:0});
});


}
		update(){


			
		}
}


