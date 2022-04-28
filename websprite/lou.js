window.onload = init;

function init(evt) {
	myVidsIndex = 0;
	let button = document.getElementById('button');
    evt.preventDefault()
    console.log(button)
	button.addEventListener("click", nextVid, 1);
    button.addEventListener("touchstart", nextVid, 1);
    
    let print = document.getElementById('print');
    evt.preventDefault()
    console.log(print)
	print.addEventListener("click", showIframe );
    print.addEventListener("touchstart", showIframe);


    let inter = document.getElementById('inter');
    evt.preventDefault()
    console.log(inter)
	inter.addEventListener("click", showIframe2);
    inter.addEventListener("touchstart", showIframe2);

    let resume = document.getElementById('cv');
    evt.preventDefault()
    console.log(cv)
	cv.addEventListener("click", showIframe3);
    cv.addEventListener("touchstart", showIframe3);

    let close = document.getElementById('close');
    evt.preventDefault()
    console.log(close)
	close.addEventListener("click", hideIframe);
    close.addEventListener("touchstart", hideIframe);
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
	element.src = "images/" + myVidsArray[myVidsIndex] + ".mp4";
}


function showIframe() {
    console.log("clicked");
    document.getElementById('mary').style.display = 'inline'; 
    document.getElementById('java').style.display = 'none'; 
    document.getElementById('resume').style.display = 'none';
}

function showIframe2() {
    console.log("clicked");
    document.getElementById('java').style.display = 'inline'; 
    document.getElementById('mary').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
}

function showIframe3() {
    console.log("clicked");
    document.getElementById('java').style.display = 'none'; 
    document.getElementById('mary').style.display = 'none';
    document.getElementById('resume').style.display = 'inline';
}

function hideIframe() {
    console.log("clicked");
    document.getElementById('mary').style.display = 'none'; 

    console.log("clicked");
    document.getElementById('java').style.display = 'none'; 
}


