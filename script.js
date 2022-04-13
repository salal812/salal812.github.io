//using promises to handle asynchronous events and external data

//ready function
document.addEventListener("DOMContentLoaded", function() {
  //define an array to hold the slideshow data 
  let slideshow = [];

  //find the ul the slides will be written to 
  const slides = document.querySelector("#slides");
  
  //this example uses an external data file called portfolio.json
  const datafile = "portfolio.json";
  const request = new Request(datafile);

  //call the fetch method and store the response to a variable
  let response = fetch(datafile);

  //fetch returns a Promise which you can then handle with then() and catch(). When the request completes, a response object is returned
  fetch(request)
  .then(response => response.json())
  .then(console.log(response))
  .then(data => {
    //console.log(data)
    console.log(data.portfolio)
    for (const portfolio of data.portfolio) {
      //create new li to hold slide content
      let slide = document.createElement('li');
      //set the content of the slide
      slide.innerHTML = `<li><img src="${portfolio.image}"><div class='text'><span class='title'>${portfolio.title}</span>`
    //append to the ul
    slides.appendChild(slide);
    }

  })
  .catch(console.error);

});