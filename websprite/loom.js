const scroller = document.querySelector("#container");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.divContent = `scrollTop: ${container.scrollTop}`;
});

const scroller = document.querySelector("#container2");

scroller.addEventListener("scroll", event => {
  output.divContent = `scrollTop: ${container2.scrollTop}`;
});

const scroller = document.querySelector("#rest");

scroller.addEventListener("scroll", event => {
  output.divContent = `scrollTop: ${rest.scrollTop}`;
});