import StockPerson from './assets/images/person_stock_photo.jpeg';
import GHLogo from './assets/images/github_logo.png';

const stockPerson = new Image();
stockPerson.src = StockPerson; 
stockPerson.id = "picture";
const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.id = "github_logo";
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

export default function createContact() { 

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

    const main = document.createElement('div');
    main.id = "main";   

    const centerDiv = document.createElement('div');
    centerDiv.id = "centerdiv";

    const contact = document.createElement('div');
    contact.id = "contact";

    let contactTitle = document.createElement('h3');
    contactTitle.id = "contactTitle";
    contactTitle.textContent = "La Saveur Contact";

    contact.appendChild(contactTitle);

    const details = document.createElement('div');
    details.id = "details";

    let detailList = [];

    for (let i = 0; i < 3; i++) {
        let addressLine = document.createElement('p');
        addressLine.classList.add("address");
        detailList.push(addressLine);
    }

    detailList[0].textContent = "Painted Porch 445";
    detailList[1].textContent = "9999 XZ Lorem Ipsum";
    detailList[2].textContent = "+99 999 99 99";

    for (let j = 0; j < detailList.length; j++) {
        details.appendChild(detailList[j]);
    }

    contact.appendChild(details);

    let email = document.createElement('p');
    email.classList.add("email");
    email.textContent = "lasaveur@paintedporch.com";

    contact.appendChild(email);

    centerDiv.appendChild(contact);

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