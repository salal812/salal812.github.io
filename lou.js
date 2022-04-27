window.onload = init;
window.onload = clickPrint;

function init(evt) {
	myVidsIndex = 0;
	let button = document.getElementById('button');
    evt.preventDefault()
    console.log(button)
	button.addEventListener("click", nextVid, 1);
    button.addEventListener("touchstart", nextVid, 1);
}

let myVidsArray = ["vid1", "vid2",];
let myVidsIndex = 0;

function nextVid(direction) {
	console.log("clicked");
    console.log("touched")
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


function clickPrint(evt){
    let print = document.getElementById('print');
    evt.preventDefault()
    console.log(print)
	print.addEventListener("click", showIframe);
    print.addEventListener("touchstart", showIframe);
}

function showIframe() {
    console.log("clicked");
    document.getElementById('mary').style.display = 'block';   
}