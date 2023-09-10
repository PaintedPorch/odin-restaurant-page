import './css/styles.css';
import './css/meyerReset.css';
import GHLogo from './assets/images/github_logo.png';
import StockPerson from './assets/images/person_stock_photo.jpeg';
import RestaurantBg from './assets/images/restaurant_bg.jpg';

const githubLogo = new Image();
githubLogo.src = GHLogo; // This can now be appended, use in all files

const stockPerson = new Image();
stockPerson.src = StockPerson; // Use in home.js

const restaurantBg = new Image();
restaurantBg.src = RestaurantBg; // Use in all files