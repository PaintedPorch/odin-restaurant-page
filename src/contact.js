import GHLogo from './assets/images/github_logo.png';

const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.id = "github_logo";
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

export default function createContact() { 

    const contentField = document.getElementById("content");

    // Make main

    const main = document.querySelector("#main");
    main.innerHTML = ""; 

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
}