import "./styles.css";
import loadHome from "./scripts/home.js";
import loadMenu from "./scripts/menu.js";
import loadAbout from "./scripts/about.js";

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll("nav button, footer Button");
    buttons.forEach((button) => button.classList.remove("active"));
    if (activeButton) activeButton.classList.add("active");
}

loadHome();

// NAV BUTTONS
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

// FOOTER BUTTONS
const footerHomeButton = document.querySelector("#footer-home");
const footerMenuButton = document.querySelector("#footer-menu");
const footerAboutButton = document.querySelector("#footer-about");

setActiveButton(homeButton);

function linkButtons(buttons, callback, mainButton) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            callback();
            setActiveButton(mainButton);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
}

linkButtons([homeButton, footerHomeButton], loadHome, homeButton);
linkButtons([menuButton, footerMenuButton], loadMenu, menuButton);
linkButtons([aboutButton, footerAboutButton], loadAbout, aboutButton);