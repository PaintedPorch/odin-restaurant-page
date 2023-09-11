export default function createHome() { 
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

    

    // Make footer
}


/* 
Content to make:

<div id="header">
    <h1 id="title">La Saveur</h1>
    <div id="navoptions">
        <div class="option">Home</div>
        <div class="option">Menu</div>
        <div class="option">Contact</div>
    </div>
</div>
<div id="main">
    <div id="centerdiv">
        <p id="centertext">Bringing delicate flavours to your palette since 1957</p>
        <div id="centerimg">
            <img id="picture" src="./../src/assets/images/person_stock_photo.jpeg" alt="stock_photo_person">
        </div>
        <p id="subtext">Visit us at Painted Porch 445, Lorem Ipsum</p>
    </div>
</div>
<div id="footer">
    <p class="copyright">Copyright &#169; 2023 Painted Porch</p>
    <img src="./../src/assets/images/github_logo.png" alt="github-logo: https://github.com/PaintedPorch" class="github_logo">
</div>
*/
