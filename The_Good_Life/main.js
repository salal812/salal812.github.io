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
	myVidsIndex = myVidsIndex + 1;	
	if (myVidsIndex == myVidsArray.length){
		myVidsIndex = 0
	}
	// update 
	element = document.getElementById('wall');
	console.log("Your element is: ");
	console.log(element);
	console.log(myVidsIndex, myVidsArray[myVidsIndex]);
	element.src = "images/" + myVidsArray[myVidsIndex] + ".png";
}
