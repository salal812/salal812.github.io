//using promises to handle asynchronous events and external data

//ready function
//document.addEventListener("DOMContentLoaded", function() {
    //define an array to hold the slideshow data 
document.addEventListener("DOMContentLoaded", function()
    {
 let slideshow = [];
    //find datafile 
  const slides=document.querySelector("#slides");
  const datafile = "media.json";
  const request = new Request(datafile);
  //call the fetch method and store the response to a variable
  let response = fetch(datafile);
  //fetch returns a Promise which you can then handle with then() and catch(). When the request completes, a response object is returned
  fetch(request)
  .then(response => response.json())
  .then(data => {
   for (const media of data.media) {
        //create new li to hold slide content
 let slide = document.createElement('li');
    slide.innerHTML = `<li class="slide"><span class='title'>${media.title}</span><img src="${media.image}"><span class="caption">${media.caption}</span></li>`
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





//var controls =
//document.querySelector('.controls');
//for(var i=0; i<controls.length; i++){
//}

//var slides = document.querySelectorAll('#slides.slide');
//var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,2000);
//function nextSlide(){
//    goToSlide(currentSlide+1);
//}

//function previousSlide(){
//    goToSlide(currentSlide-1);
//}

//function goToSlide(n){
//    slides[currentSlide].className = 'slide';
//    currentSlide = (n+slides.length)%2;
//    slides[currentSlide].className = 'showing';
//}


//function() {

    //get file
    //getJson(datafile, function(data){
    //console.log(data.media)
    //slideshow = data.media;
    //loop through array to get content 
    //for each(slideshow, (i, obj) => {
         //   ("#slides").append('<li id="${i}"><img src="${obj.image}"><div class=', text, '><span class=', title, '>${obj.title}</span><span class=', caption, '>${obj.caption}</span><audio source src="${media.audio}"></audio></div></li>');
       // });
   // });

//});