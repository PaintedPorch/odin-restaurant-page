import StockPerson from './assets/images/person_stock_photo.jpeg';
import GHLogo from './assets/images/github_logo.png';

const stockPerson = new Image();
stockPerson.src = StockPerson; 
stockPerson.id = "picture";
const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.id = "github_logo";
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

export default function createMain() {
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

    for (let i = 0; i < 3; i++) {
        let option = document.createElement('div');
        option.classList.add("option");
        navOptionList.push(option);
    }

    navOptionList[0].textContent = "Home";
    navOptionList[1].textContent = "Menu";
    navOptionList[2].textContent = "Contact";

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

    const entree = document.createElement('div');
    entree.id = "entree";

    let entreeTitle = document.createElement('h3');
    entreeTitle.id = "entreetitle";
    entreeTitle.textContent = "Entrée";

    entree.appendChild(entreeTitle);

    let entreeOptionList = [];

    for (let i = 0; i < 3; i++) {
        let entreeDish = document.createElement('p');
        entreeDish.classList.add("entreedish");
        entreeOptionList.push(entreeDish);
    }

    entreeOptionList[0].textContent = "Sea Bream";
    entreeOptionList[1].textContent = "Sweetbread";
    entreeOptionList[2].textContent = "Pommes Tsarin";

    for (let j = 0; j < entreeOptionList.length; j++) {
        entree.appendChild(entreeOptionList[j]);
    }

    menu.append(entree);

    //

    const mainDish = document.createElement('div');
    mainDish.id = "mainDish";

    let mainTitle = document.createElement('h3');
    mainTitle.id = "mainDishTitle";
    mainTitle.textContent = "Main";

    mainDish.appendChild(mainTitle);

    let mainOptionList = [];

    for (let i = 0; i < 3; i++) {
        let mainDishText = document.createElement('p');
        mainDishText.classList.add("mainDish");
        mainOptionList.push(mainDishText);
    }

    mainOptionList[0].textContent = "Turbot";
    mainOptionList[1].textContent = "Anjou Pigeon";
    mainOptionList[2].textContent = "Wagyu A5 Sirloin";

    for (let j = 0; j < mainOptionList.length; j++) {
        mainDish.appendChild(mainOptionList[j]);
    }

    menu.appendChild(mainDish);

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
        dessertOptionText.classList.add("mainDish");
        dessertOptionList.push(dessertOptionText);
    }

    dessertOptionList[0].textContent = "Bergamot";
    dessertOptionList[1].textContent = "Lychee Souffle";
    dessertOptionList[2].textContent = "Cheese Selection";

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