import './css/styles.css';
import './css/meyerReset.css';
import GHLogo from './assets/images/github_logo.png';
import StockPerson from './assets/images/person_stock_photo.jpeg';
import RestaurantBg from './assets/images/restaurant_bg.jpg';
import createHome from './../src/home.js'; 

const githubLogo = new Image();
githubLogo.src = GHLogo; // This can now be appended, use in all files

const stockPerson = new Image();
stockPerson.src = StockPerson; // Use in home.js

const restaurantBg = new Image();
restaurantBg.src = RestaurantBg; // Use in all files

// Start module-support code

const contentField = document.getElementById("content");

function wipeContent() { // Resets content. runs before every content appendation
    contentField.innerHTML = "";
}

// End module-support code

wipeContent();
createHome();