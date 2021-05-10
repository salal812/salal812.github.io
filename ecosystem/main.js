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

var seven = new Audio();
seven.src = "soundList/horse.mp3";
function PlayHorse() {
    seven.play();
}
function PauseHorse() {
    seven.pause();
}

var eight = new Audio();
eight.src = "soundList/redbishop.mp3";
function PlayRedBishop() {
    eight.play();
}
function PauseRedBishop(){
    eight.pause();
}

var nine = new Audio ();
nine.src = "soundList/robot.wav";
function PlayRobot(){
    nine.play();
}
function PauseRobot(){
    nine.pause();
}

var A0 = new Audio ();
A0.src = "soundList/A0.mp3";
function PlayA0(){
    A0.play();
}

var A1 = new Audio ();
A1.src = "soundList/A1.mp3";
function PlayA1(){
    A1.play();
}

var A2 = new Audio ();
A2.src = "soundList/A2.mp3";
function PlayA2(){
    A2.play();
}

var A3 = new Audio ();
A3.src = "soundList/A3.mp3";
function PlayA3(){
    A3.play();
}

var A4 = new Audio ();
A4.src = "soundList/A4.mp3";
function PlayA4(){
    A4.play();
}

var A5 = new Audio ();
A5.src = "soundList/A5.mp3";
function PlayA5(){
    A5.play();
}

var A6 = new Audio ();
A6.src = "soundList/A6.mp3";
function PlayA6(){
    A6.play();
}

var A7 = new Audio ();
A7.src = "soundList/A7.mp3";
function PlayA7(){
    A7.play();
}

document.addEventListener('keydown', function(event){
    if(event.key =="h"){
        console.log("confirm");
    }
});


function PauseSounds1() {
    one.pause();
    two.pause();
    three.pause();
    four.pause();
    five.pause();
    six.pause();
    seven.pause();
    eight.pause();
    nine.pause();
}


