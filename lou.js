window.onload = init;
	
function init() {
	myVidsIndex = 0;
	let button = document.getElementById('button');
	console.log(button)
	button.addEventListener("click", nextVid, 1);
}

let myVidsArray = ["vid1", "vid2",];
let myVidsIndex = 0;

function nextVid(direction) {
	console.log("clicked");
	//increment / decrement array
	myVidsIndex = myVidsIndex + 1;	
	if (myVidsIndex == myVidsArray.length){
		myVidsIndex = 0
	}
	// update 
	element = document.getElementById('vid');
	console.log("Your element is: ");
	console.log(element);
	console.log(myVidsIndex, myVidsArray[myVidsIndex]);
	element.src = "websprite/" + "images/" + myVidsArray[myVidsIndex] + ".mp4";
}
