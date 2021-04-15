window.onload = init;
	
function init() {
	let mywallIndex = 0;
	let button = document.getElementById('button');
	console.log(button)
	button.addEventListener("click", change, 1);
}

let mywallsArray = ["wall1", "wall2", "wall3",];
let mywallIndex = 1;

function change(direction) {
	console.log("clicked");
	//increment / decrement array
	mywallIndex = mywallIndex + 1;	
	if (mywallIndex == mywallsArray.length){
		mywallIndex = 0
	}
	// update 
	element = document.getElementById("wall");
	console.log("Your element is: ");
	console.log(element);
	console.log(mywallIndex, mywallsArray[mywallIndex]);
	element.src = "url(images/" + mywallsArray[mywallIndex] + ".png";
}
