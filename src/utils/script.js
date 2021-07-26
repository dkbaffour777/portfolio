const developerTitleEl = document.querySelector("#title");
const date = new Date();
const year = date.getFullYear();
document.querySelector("#copy-right").textContent += ` Daniel Baffour - Portfolio ${year}`

let counter = 0;
const title = 'Full Stack Web Developer'; /* The text */

const developerTitle = ()=> {
  if (counter < title.length) {
    developerTitleEl.textContent += title.charAt(counter);
    counter++;
    setTimeout(developerTitle, 52);
  }
}

developerTitle();