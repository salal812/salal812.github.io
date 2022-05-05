window.onload = init;

function init(evt) {
	myVidsIndex = 0;
    
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

    let fun = document.getElementById('fun');
    evt.preventDefault()
    console.log(fun)
	fun.addEventListener("click", showIframe3);
    fun.addEventListener("touchstart", showIframe3);

    let cv = document.getElementById('cv');
    evt.preventDefault()
    console.log(cv)
	cv.addEventListener("click", showIframe4);
    cv.addEventListener("touchstart", showIframe4);

    let mg = document.getElementById('mg');
    evt.preventDefault()
    console.log(mg)
	mg.addEventListener("click", showIframe5);
    mg.addEventListener("touchstart", showIframe5);

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
    document.getElementById('web').style.display = 'none'; 
    document.getElementById('resume').style.display = 'none';
    document.getElementById('java').style.display = 'none'; 
}

function showIframe2() {
    console.log("clicked");
    document.getElementById('web').style.display = 'inline'; 
    document.getElementById('mary').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
    document.getElementById('java').style.display = 'none'; 
}

function showIframe3() {
    console.log("clicked");
    document.getElementById('web').style.display = 'none'; 
    document.getElementById('mary').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
    document.getElementById('java').style.display = 'inline'; 
}

function showIframe4() {
    console.log("clicked");
    document.getElementById('java').style.display = 'none'; 
    document.getElementById('mary').style.display = 'none';
    document.getElementById('resume').style.display = 'inline';
    document.getElementById('java').style.display = 'none'; 
}

function showIframe5() {
    console.log("clicked");
    document.getElementById('java').style.display = 'none'; 
    document.getElementById('mary').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
    document.getElementById('java').style.display = 'none'; 
    document.getElementById('motion').style.display = 'inline'; 
}

function hideIframe() {
    console.log("clicked");
    document.getElementById('mary').style.display = 'none'; 

    console.log("clicked");
    document.getElementById('java').style.display = 'none'; 
}


