const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const mineBtn = document.getElementById("mine")
// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
christmasBtn.addEventListener("click", () => {
  body.classList.remove("snow");
  body.classList.remove("mine");
  body.classList.add("christmas");
})

snowBtn.addEventListener("click", () => {
  body.classList.remove("christmas");
  body.classList.remove("mine");
  body.classList.add("snow");
})

mineBtn.addEventListener("click", () => {
  body.classList.remove("christmas");
  body.classList.remove("snow");
  body.classList.add("mine");
})
// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch