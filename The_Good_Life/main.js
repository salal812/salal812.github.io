window.onload = init;
	
function init() {
	myVidsIndex = 0;
	let logo = document.getElementById('logo');
	console.log(logo)
	logo.addEventListener("click", nextWall, 1);
}

let myWallsArray = ["wall1", "wall2", "wall3", "wall4"];
let myWallsIndex = 0;

function nextWall(direction) {
	console.log("clicked");
	//increment / decrement array
	myWallsIndex = myWallsIndex + 1;	
	if (myWallsIndex == myWallsArray.length){
		myWallsIndex = 0
	}
	// update 
	element = document.getElementById('wall');
	console.log("Your element is: ");
	console.log(element);
	console.log(myWallsIndex, myWallsArray[myWallsIndex]);
	element.src = "images/" + myWallsArray[myWallsIndex] + ".png";
}
