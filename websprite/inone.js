window.onload = init;
	
function init() {
	myPicsIndex = 0;
	let next = document.getElementById('next');
	console.log(next)
	next.addEventListener("click", nextPic, 1);

    let prev = document.getElementById('prev');
    console.log(prev)
    prev.addEventListener("click", prevPic, -1);

	myPhotosIndex = 0;
	let more = document.getElementById('more');
	console.log(more)
	more.addEventListener("click", morePhoto, 1);

    let less = document.getElementById('less');
    console.log(less)
    less.addEventListener("click", lessPhoto, -1);

}

let myPicsArray = ["inone1", "inone2", "inone3", "inone3", "inone5", "inone6", "inone7", "inone9", "inone10", "inone11", "inone12", "inone13", "inone14", "inone15",];
let myPicsIndex = 0;

function nextPic(direction) {
	console.log("clicked");
	//increment / decrement array
	myPicsIndex = myPicsIndex + 1;	
	if (myPicsIndex == myPicsArray.length){
		myPicsIndex = 0
	}
	// update 
	element = document.getElementById('pic');
	console.log("Your element is: ");
	console.log(element);
	console.log(myPicsIndex, myPicsArray[myPicsIndex]);
	element.src = "./images/" + myPicsArray[myPicsIndex] + ".jpg";
}

function prevPic(direction) {
	console.log("clicked");
	//increment / decrement array
	myPicsIndex = myPicsIndex - 1;	
	if (myPicsIndex == -1){
		myPicsIndex = myPhotosArray.length - 1
	}
	// update 
	element = document.getElementById('pic');
	console.log("Your element is: ");
	console.log(element);
	console.log(myPicsIndex, myPicsArray[myPicsIndex]);
	element.src = "./images/" + myPicsArray[myPicsIndex] + ".jpg";
}

let myPhotosArray = ["loom1", "loom2", "loom3", "loom4", "loom5", "loom6", "loom7", "loom9", "loom10", "loom11", "loom12", "loom13",];
let myPhotosIndex = 0;


function lessPhoto(direction) {
	console.log("clicked");
	//increment / decrement array
	myPhotosIndex = myPhotosIndex - 1;	
	if (myPhotosIndex == -1){
		myPhotosIndex = myPhotosArray.length - 1
	}
	// update 
	element = document.getElementById("photo");
	console.log("Your element is: ");
	console.log(element);
	console.log(myPhotosIndex, myPhotosArray[myPhotosIndex]);
	element.src = "./images/" + myPhotosArray[myPhotosIndex] + ".png";
}

function morePhoto(direction) {
	console.log("clicked");
	//increment / decrement array
	myPhotosIndex = myPhotosIndex + 1;	
	if (myPhotosIndex == myPhotosArray.length){
		myPhotosIndex = 0
	}
	// update 
	element = document.getElementById("photo");
	console.log("Your element is: ");
	console.log(element);
	console.log(myPhotosIndex, myPhotosArray[myPhotosIndex]);
	element.src = "./images/" + myPhotosArray[myPhotosIndex] + ".png";
}