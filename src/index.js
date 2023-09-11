import './css/styles.css';
import './css/meyerReset.css';
import GHLogo from './assets/images/github_logo.png';
import StockPerson from './assets/images/person_stock_photo.jpeg';
// import createHome from './../src/home.js'; 
// import createMain from './../src/menu.js';
// import createWines from './../src/wines.js';

// Image region

const stockPerson = new Image();
stockPerson.src = StockPerson; 
stockPerson.id = "picture";

const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.id = "github_logo";
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

// End image region

// Start module-support code

// const contentField = document.getElementById("content");

// function wipeContent() { // Resets content. runs before every content appendation
//     contentField.innerHTML = "";
// }

// End module-support code

// wipeContent();
// createHome();
// createMain();
// createWines();