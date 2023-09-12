import './css/styles.css';
import './css/meyerReset.css';
import createHome from './../src/home.js'; 
import createMenu from './../src/menu.js';
import createWines from './../src/wines.js';
import createContact from './../src/contact.js';

// Start module-support code

createHome();

const home = document.querySelector(".homeOption");
const menu = document.querySelector(".menuOption");
const wines = document.querySelector(".wineOption");
const contact = document.querySelector(".contactOption");

// End module-support code

// Let's add logic to shift tabs on click and add active element classes

let optionList = [home, menu, wines, contact];

home.addEventListener("click", function() {
    createHome();

    for (let i = 0; i < optionList.length; i++) {
        optionList[i].classList.remove("activeOption");
    }

    home.classList.add("activeOption");
});
menu.addEventListener("click", function() {
    createMenu();

    for (let i = 0; i < optionList.length; i++) {
        optionList[i].classList.remove("activeOption");
    }

    menu.classList.add("activeOption");
});
wines.addEventListener("click", function() {
    createWines();

    for (let i = 0; i < optionList.length; i++) {
        optionList[i].classList.remove("activeOption");
    }

    wines.classList.add("activeOption");
});
contact.addEventListener("click", function() {
    createContact();

    for (let i = 0; i < optionList.length; i++) {
        optionList[i].classList.remove("activeOption");
    }

    contact.classList.add("activeOption");
});