window.onload = init;

function init(evt) {
	let push = document.getElementById('tunes');
    evt.preventDefault()
    console.log(push)
	push.addEventListener("click", showTunes);
    push.addEventListener("touchstart", showTunes);
}

function showTunes() {
    console.log("clicked");
    document.getElementById('extras').style.display= 'inline';
}