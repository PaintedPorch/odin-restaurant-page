import StockPerson from './assets/images/person_stock_photo.jpeg';
import GHLogo from './assets/images/github_logo.png';

const stockPerson = new Image();
stockPerson.src = StockPerson; 
stockPerson.id = "picture";
const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.id = "github_logo";
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

export default function createWines() {
    const contentField = document.getElementById("content");
    // Make header

    const header = document.createElement('div'); // create header
    header.id = "header";

    let title = document.createElement('h1'); // create title
    title.id = "title";
    title.textContent = "La Saveur";

    header.appendChild(title);

    const navOptions = document.createElement('div'); // create navoptions
    navOptions.id = "navoptions";

    let navOptionList = [];

    for (let i = 0; i < 4; i++) {
        let option = document.createElement('div');
        option.classList.add("option");
        navOptionList.push(option);
    }

    navOptionList[0].textContent = "Home";
    navOptionList[1].textContent = "Menu";
    navOptionList[2].textContent = "Wines";
    navOptionList[3].textContent = "Contact";

    for (let j = 0; j < navOptionList.length; j++) {
        navOptions.appendChild(navOptionList[j]);
    }

    header.append(navOptions);

    contentField.appendChild(header);

    // Make main

    const main = document.createElement('div'); // create header
    main.id = "main";   

    const centerDiv = document.createElement('div');
    centerDiv.id = "centerdiv";

    const menu = document.createElement('div');
    menu.id = "menu";

    const red = document.createElement('div');
    red.id = "red";

    let redTitle = document.createElement('h3');
    redTitle.id = "redtitle";
    redTitle.textContent = "Red";

    red.appendChild(redTitle);

    let redOptionList = [];

    for (let i = 0; i < 3; i++) {
        let redWine = document.createElement('p');
        redWine.classList.add("redwine");
        redOptionList.push(redWine);
    }

    redOptionList[0].textContent = "Châteauneuf du Pape Le Parvis 2017";
    redOptionList[1].textContent = "Domaine Raspail-Ay's Gigondas 2020";
    redOptionList[2].textContent = "Domaine Aupy Saumur Red 2018";

    for (let j = 0; j < redOptionList.length; j++) {
        red.appendChild(redOptionList[j]);
    }

    menu.append(red);

    //

    const white = document.createElement('div');
    white.id = "mainDish";

    let whiteTitle = document.createElement('h3');
    whiteTitle.id = "whitetitle";
    whiteTitle.textContent = "White";

    white.appendChild(whiteTitle);

    let whiteOptionList = [];

    for (let i= 0; i < 3; i++) {
        let whiteWineText = document.createElement('p');
        whiteWineText.classList.add("whitewine");
        whiteOptionList.push(whiteWineText);
    }

    whiteOptionList[0].textContent = "Vermentino France Ludo Le Francais";
    whiteOptionList[1].textContent = "Sauvignon Blanc Lulu Le Francais";
    whiteOptionList[2].textContent = "Hungerfird Hill Chardonnay";

    for (let j = 0; j < whiteOptionList.length; j++) {
        white.appendChild(whiteOptionList[j]);
    }

    menu.appendChild(white);

    //

    const dessert = document.createElement('div');
    dessert.id = "mainDish";

    let dessertTitle = document.createElement('h3');
    dessertTitle.id = "desserttitle";
    dessertTitle.textContent = "Dessert";

    dessert.appendChild(dessertTitle);

    let dessertOptionList = [];

    for (let i = 0; i < 3; i++) {
        let dessertOptionText = document.createElement('p');
        dessertOptionText.classList.add("dessertWine");
        dessertOptionList.push(dessertOptionText);
    }

    dessertOptionList[0].textContent = "Domaine Bru-Baché Jurançon Cuvée Jean";
    dessertOptionList[1].textContent = "Chateau de Fesles Bonnezeaux";
    dessertOptionList[2].textContent = "Domaine Marcel Deiss Altenberg de Bergheim";

    for (let j = 0; j < dessertOptionList.length; j++) {
        dessert.appendChild(dessertOptionList[j]);
    }

    menu.append(dessert);

    centerDiv.appendChild(menu);

    main.appendChild(centerDiv);
    
    contentField.appendChild(main);

    // Make footer

    const footer = document.createElement('div');
    footer.id = "footer";

    let copyright = document.createElement('p');
    copyright.textContent = "Copyright © 2023 Painted Porch";

    footer.appendChild(copyright);
    footer.appendChild(githubLogo);

    contentField.appendChild(footer);
}