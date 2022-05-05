window.onload = init;

function init(evt) {
	let push = document.getElementById('push');
    evt.preventDefault()
    console.log(push)
	push.addEventListener("click", showCaption, 1);
    push.addEventListener("touchstart", showCaption, 1);
}

function showCaption() {
    console.log("clicked");
    document.getElementById('image-caption').style.display= 'inline';
}