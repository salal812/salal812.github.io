// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyESExWOfdL5PtXZ" }).base(
	"appkEAtYwtgaRvuKG"
);

base("catalogue").select({ maxObjects:100 }).eachPage(gotPageOfObjects, gotAllObjects);

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

  // call functions to log and show the books
  try {
      showObjects();
  } catch (error) {
      console.error(error);}
} 

// look through our airtable data, create elements
function showObjects() {
  console.log("showObjects()");
  objects.forEach(object => {
    // create container for each song
    var objectContainer = document.createElement("div");
    objectContainer.classList.add("object-container");
    document.querySelector(".container").append(objectContainer);

    // add song titles
    var objectTitle = document.createElement("h1");
    objectTitle.classList.add("name");
    objectTitle.innerText = object.fields.title;
    objectContainer.append(objectTitle);

    var objectImage = document.createElement("img");
    objectImage.classList.add("image");
    objectImage.src = song.fields.image[0].url;
    objectContainer.append(objectImage);
	});
}
