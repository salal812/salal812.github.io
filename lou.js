//using promises to handle asynchronous events and external data

//ready function
//document.addEventListener("DOMContentLoaded", function() {
    //define an array to hold the slideshow data 
    document.addEventListener("DOMContentLoaded", function()
    {
 let slideshow = [];
    //find datafile 
  const slides=document.querySelector("#slides");
  const datafile = "me.json";
  const request = new Request(datafile);
  //call the fetch method and store the response to a variable
  let response = fetch(datafile);
  //fetch returns a Promise which you can then handle with then() and catch(). When the request completes, a response object is returned
  fetch(request)
  .then(response => response.json())
  .then(data => {
   for (const me of data.me) {
        //create new li to hold slide content
 let slide = document.createElement('li');
    slide.innerHTML = `<li class="slide"><span class='title'>${me.title}</span><img src="${me.image}"><span class="caption">${me.caption}</span></div><audio src="${me.audio}"</audio></li>`
 //append to the ul
 slides.appendChild(slide);
    }

    })

.catch(console.error);

});


let slideIndex = 1;
showSlides(slideIndex);

console.log(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active";
}

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
    audio.play();
})
