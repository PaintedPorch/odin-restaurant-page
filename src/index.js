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

home.addEventListener("click", createHome);
menu.addEventListener("click", createMenu);
wines.addEventListener("click", createWines);
contact.addEventListener("click", createContact);