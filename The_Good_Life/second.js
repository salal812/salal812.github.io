//console.log("hello")
//loading airtable library cal, it "airtable"
var Airtable = require("airtable");
//console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyESExWOfdL5PtXZ" }).base(
  "appkEAtYwtgaRvuKG"
);

//get collection base select all records(columns) 
//specify functions recieving data 
base("catalogue")
  .select({})
  .eachPage(gotPageOfObjects, gotAllObjects);

// an empty array to hold our data
var objects = [];

// callback function that receives our data
function gotPageOfObjects(records, fetchNextPage) {
  console.log("gotPageOfObjects()");
  // add the records from this page to our array
  objects.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllObjects(err) {
  console.log("gotAllObjects()");

// report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogObjects();
  showObjects();
}

// just loop through the books and console.log them
function consoleLogObjects() {
  console.log("consoleLogObjects()");
  objects.forEach(object => {
    console.log("Object:", object);
  });
}
// look through our airtable data, create elements
function showObjects() {
  console.log("showObjects()");
  objects.forEach(object => {
    //creating new div container for the songs
  var objectContainer = document.createElement("div");
  objectContainer.classList.add("object-container");
  document.querySelector(".container").append(objectContainer)
  
  var objectTitle = document.createElement("h1");
  objectTitle.classList.add("object-title")
  objectTitle.innerText = object.fields.title;
  objectContainer.append(objectTitle);

  var objectArtist = document.createElement("h2");
  objectArtist.classList.add("object-artist")
  objectArtist.innerText = object.fields.artist;
  objectContainer.append(objectArtist);

  var objectImage = document.createElement("img");
  objectImage.classList.add("object-Image")
  objectImage.src = object.fields.image[0].url;
  objectContainer.append(objectImage);

  //call the filter field from airtable loop through array add each as a class to the song container
  var objectRoom = object.fields.room;
  objectRoom.forEach(function(room) {
    objectContainer.classList.add(room)
  });

  //add event listener to filter
  //to add an active class to rooms

  var filterKitchen = document.querySelector('.kitchen');
  filterKitchen.addEventListener("click", function() {

    if (objectContainer.classList.contains("kitchen")) {
      document.body.style.backgroundImage = "url('./images/kitchen_1.png')"; 
      objectContainer.style.display = "block";
    } else {
      objectContainer.style.display = "none";
    }
  }) 

  var filterLiving = document.querySelector('.living_room');
  filterLiving.addEventListener("click", function() {

    if (objectContainer.classList.contains("living_room")) {
      objectContainer.style.display = "block";
      document.body.style.backgroundImage = "url('sala1.png')";
    } else {
      objectContainer.style.display = "none";
    }
  }) 

  var filterBedroom = document.querySelector('.bedroom');
  filterBedroom.addEventListener("click", function() {

    if (objectContainer.classList.contains("bedroom")) {
      objectContainer.style.display = "block";
      document.body.style.backgroundImage = "url('bedroom2.png')";
    } else {
      objectContainer.style.display = "none";
    }
  }) 

var filterOffice = document.querySelector('.office');
  filterOffice.addEventListener("click", function() {

    if (objectContainer.classList.contains("office")) {
      objectContainer.style.display = "block";
      document.body.style.backgroundImage = "url('bathroom2.png')";
    } else {
      objectContainer.style.display = "none";
    }
  }) 

var filterMiscellaneous = document.querySelector('.miscellaneous');
  filterMiscellaneous.addEventListener("click", function() {

    if (objectContainer.classList.contains("miscellaneous")) {
      objectContainer.style.display = "block";
      document.body.style.backgroundImage = "url('bathroom2.png')";
    } else {
      objectContainer.style.display = "none";
    }
  })

var filterEntrance = document.querySelector('.entrance');
  filterEntrance.addEventListener("click", function() {

    if (objectContainer.classList.contains("entrance")) {
      objectContainer.style.display = "block";
      document.body.style.backgroundImage = "url('bathroom2.png')";
    } else {
      objectContainer.style.display = "none";
    }
  })

  var filterBathroom = document.querySelector('.bathroom');
  filterBathroom.addEventListener("click", function() {

    if (objectContainer.classList.contains("bathroom")) {
      objectContainer.style.display = "block";
      document.body.style.backgroundImage = "url('bathroom2.png')";
    } else {
      objectContainer.style.display = "none";
    }
  })

  var filterTools = document.querySelector('.tools_cleaning');
  filterTools.addEventListener("click", function() {

    if (objectContainer.classList.contains("tools_cleaning")) {
      objectContainer.style.display = "block";
      document.body.style.backgroundImage = "url('bathroom2.png')";
    } else {
      objectContainer.style.display = "none";
    }
  })

});
}
