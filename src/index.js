import "./styles.css";
import loadHome from "./scripts/home.js";
import loadMenu from "./scripts/menu.js";
import loadAbout from "./scripts/about.js";

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach((button) => button.classList.remove("active"));
    if (activeButton) activeButton.classList.add("active");
}

loadHome();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

setActiveButton(homeButton);

function addListeners(button, callback) {
    button.addEventListener("click", () => {
        callback();
        setActiveButton(button);
    });
}

addListeners(homeButton, loadHome);
addListeners(menuButton, loadMenu);
addListeners(aboutButton, loadAbout);