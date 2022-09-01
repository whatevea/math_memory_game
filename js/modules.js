
//loads main menu contents and buttons
function loadMenuScreen(_scene){
const contents="An indie game made to improve my Math and Memory Skills(for myself). Check out how this was made in www.talkingq3.blogspot.com";

_scene.add.text(10, 0, '3rd Memory Game ', _data.title_text_style);
	const playBtn=_scene.add.text(50, 90, ' Play', _data.title_text_style);
	const aboutBtn=_scene.add.text(50, 120, ' About', _data.title_text_style);
	playBtn.setInteractive();
	playBtn.on('pointerdown', function () {
    playBtn.text="OK";
    //starts next scene
    this.scene.scene.start('Scene2');
});
	//when about btn is clicked
	aboutBtn.setInteractive();
	aboutBtn.on("pointerdown",function(){
			this.text="";
	_scene.add.text(40,180,contents,_data.basic_text_style)

	})}

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function genQuestionType() {
  min = 0
  max = 10
  ans=Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  if(ans % 2===0){
  	return "Memory"
  }
  else{
  	return "Arthmetic"
  }
}
//shuffle array algorithm from Stackoverflow
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}