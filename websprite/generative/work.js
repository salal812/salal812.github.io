window.onload = init;

function init(evt) {
    
    let scroll = document.getElementById('scroll');
    evt.preventDefault()
    console.log(scroll)
	scroll.addEventListener("click", show );
    scroll.addEventListener("touchstart", show);

    let bloc = document.getElementById('bloc');
    evt.preventDefault()
    console.log(bloc)
	bloc.addEventListener("click", show2 );
    bloc.addEventListener("touchstart", show2);
}

function show() {
    console.log("clicked");
    document.getElementById('scrollcont').style.display = 'inline'; 
    document.getElementById('bloccont').style.display = 'none'; 
}

function show2() {
    console.log("clicked");
    document.getElementById('scrollcont').style.display = 'none'; 
    document.getElementById('bloccont').style.display = 'inline'; 
}