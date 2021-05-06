var one = new Audio();
one.src = "soundList/cats.mp3";
function PlayCats() {
    one.play();
}
function PauseCats() {
    one.pause();
}
var two = new Audio();
two.src = "soundList/birds.wav";
function PlayBirds() {
    two.play();
}
function PauseBirds() {
    two.pause();
}
var three = new Audio();
three.src = "soundList/Cricket.wav";
function PlayCricket() {
    three.play();
}
function PauseCricket() {
    three.pause();
}

var four= new Audio();
four.src = "soundList/dog.wav";
function PlayDog() {
    four.play();
}
function PauseDog() {
    four.pause();
}

var five = new Audio();
five.src = "soundList/LevantSparrowhawk.wav";
function PlayLevant() {
    five.play();
}
function PauseLevant() {
    five.pause();
}

var six = new Audio();
six.src = "soundList/rainforest.mp3";
function PlayRainforest() {
    three.play();
}
function PauseRainforest() {
    three.pause();
}




window.onload = init;
	
function init() {
	myVidsIndex = 0;
	let small = document.getElementById('small');
	console.log(small)
	small.addEventListener("click", nextVid, 1);
}

let myVidsArray = ["vid1", "vid2", "vid3", "vid4"];
let myVidsIndex = 0;

function nextVid(direction) {
	console.log("clicked");
	//increment / decrement array
	myVidsIndex = myVidsIndex + 1;	
	if (myVidsIndex == myVidsArray.length){
		myVidsIndex = 0
	}
	// update 
	element = document.getElementById('myVideo');
	console.log("Your element is: ");
	console.log(video);
	console.log(myVidsIndex, myVidsArray[myVidsIndex]);
	video.src = "videos/" + myVidsArray[myVidsIndex] + ".mp4";
}
