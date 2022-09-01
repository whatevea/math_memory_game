class Scene1 extends Phaser.Scene
{
constructor()
{
super("Scene1");

}

	preload(){
		this.load.image('card', 'assets/card.png');
		this.load.image('start_button', 'assets/next_button.png');
		this.load.image('right', 'assets/tick_gif.gif');
		this.load.image('wrong', 'assets/cross_gif.gif');
	}





	create() {
		
		loadMenuScreen(this);

			}




	update(){}
}


