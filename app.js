/**
 * This code will allow the user to enter their name and the crush's name and it will display a love score and a description
 */
const yourName = document.querySelector("#your-name");
const crushName = document.querySelector("#crush-name");
const calculate = document.querySelector("#calculate");
const loveScore = document.querySelector("#love-score");
const loveDescription = document.querySelector("#love-description");
const inputs = document.querySelector(".inputs");
const form = document.querySelector("form");
const visible = document.getElementById("visible");
calculate.addEventListener("click", loveFunction);

//Function for when the button clicks
function loveFunction() {
  if (form.checkValidity()) {
    var lovePercent = Math.floor(Math.random() * 100) + 1;
    var summary = (loveScore.innerHTML = lovePercent + "%");
    visible.style.display = "initial";
    if (lovePercent <= 25) {
      location.href = "#love-description";
      summary;
      loveDescription.textContent =
        yourName.value +
        " and " +
        crushName.value +
        " sounds like a match made for disaster!";
    } else if (lovePercent > 25 && lovePercent <= 50) {
      location.href = "#love-description";
      summary;
      loveDescription.textContent =
        "Love isn't perfect, but you and " +
        crushName.value +
        " might work out, just expect fights.";
    } else if (lovePercent > 50 && lovePercent <= 75) {
      location.href = "#love-description";
      summary;
      loveDescription.textContent =
        "You and " +
        crushName.value +
        " are almost perfect for each other, but they're maybe a few problems you guys will need to work out, but you both will work it out together!";
    } else {
      location.href = "#love-description";
      summary;
      loveDescription.textContent =
        yourName.value +
        " and " +
        crushName.value +
        " sounds like a match made in Heaven!";
    }
  }
}
