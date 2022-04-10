//using promises to handle asynchronous events and external data

//ready function
document.addEventListener("DOMContentLoaded", function() {
  //define an array to hold the slideshow data 
  let slideshow = [];

  //find the ul the slides will be written to 
  const slides = document.querySelector("#slides");
  
  //this example uses an external data file called lemurs.json
  const datafile = "lemurs.json";
  const request = new Request(datafile);

  //call the fetch method and store the response to a variable
  let response = fetch(datafile);

  //fetch returns a Promise which you can then handle with then() and catch(). When the request completes, a response object is returned
  fetch(request)
  .then(response => response.json())
  .then(console.log(response))
  .then(data => {
    //console.log(data)
    console.log(data.lemurs)
    for (const lemur of data.lemurs) {
      //create new li to hold slide content
      let slide = document.createElement('li');
      //set the content of the slide
      slide.innerHTML = `<li><img src="${lemur.image}"><div class='text'><span class='title'>${lemur.title}</span><span class='caption'>${lemur.caption}</span></div></li>`
    //append to the ul
    slides.appendChild(slide);
    }

  })
  .catch(console.error);

});