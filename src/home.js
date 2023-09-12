import GHLogo from './assets/images/github_logo.png';

const githubLogo = new Image();
githubLogo.src = GHLogo; 
githubLogo.id = "github_logo";
githubLogo.alt = "github-logo: https://github.com/PaintedPorch";

export default function createHome() { 

    const contentField = document.getElementById("content");

    // Make main

    const main = document.querySelector("#main");
    main.innerHTML = "";

    const centerDiv = document.createElement('div');
    centerDiv.id = "centerdiv";

    let centerText = document.createElement('p');
    centerText.id = "centertext";
    centerText.textContent = "Bringing delicate flavours to your palette since 1957";

    centerDiv.appendChild(centerText);

    let midText = document.createElement('p');
    midText.id = "midtext";
    midText.textContent = "We have had the honor to receive a Michelin Star in 2011";

    centerDiv.appendChild(midText);

    let subText = document.createElement('p');
    subText.id = "subtext";
    subText.textContent = "Visit us at Painted Porch 445, Lorem Ipsum";

    centerDiv.appendChild(subText);

    main.appendChild(centerDiv);
    
    contentField.appendChild(main);

    // Make footer

    let imgCounter = 0;

    const footer = document.querySelector("#footer");

    if (imgCounter == 0) {
        footer.appendChild(githubLogo);
    }

    contentField.appendChild(footer);

    imgCounter++;
}