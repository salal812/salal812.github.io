window.onload = init;
	
function init() {
	myPicsIndex = 0;
	let next = document.getElementById('next');
	console.log(next)
	next.addEventListener("click", nextPic, 1);

    let prev = document.getElementById('prev');
    console.log(prev)
    prev.addEventListener("click", prevPic, -1)

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
	element.src = "/websprite/" +"images/" + myPicsArray[myPicsIndex] + ".jpg";
}

function prevPic(direction) {
	console.log("clicked");
	//increment / decrement array
	myPicsIndex = myPicsIndex - 1;	
	if (myPicsIndex == -1){
		myPicsIndex = myPicsArray.length - 1
	}
	// update 
	element = document.getElementById("pic");
	console.log("Your element is: ");
	console.log(element);
	console.log(myPicsIndex, myPicsArray[myPicsIndex]);
	element.src = "/websprite/" +"images/" + myPicsArray[myPicsIndex] + ".jpg";
}