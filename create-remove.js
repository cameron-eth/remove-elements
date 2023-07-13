/****************************** ADD DOG BUTTON ******************************/

const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // console.log(url);
        const breedArray = url.split('/');
        const breed = breedArray[breedArray.length - 2];
        // console.log(breed);

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here

        const currImg = document.querySelector("img");
        currImg.src = url;
        // console.log(currImg);

        const breedCaption = document.querySelector("figcaption");
        breedCaption.innerText = breed;

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const newLi = document.createElement("li");
        const figure = document.createElement("figure")
        const image = document.createElement("img")
        const figcaption = document.createElement("figcaption");

        image.src = url;
        figcaption.innerText = breed;

        figure.appendChild(image);
        figure.appendChild(figcaption)

        newLi.appendChild(figure);

        const ul = document.querySelector("ul");
        // newLi.innerHTML = `<figure>${currImg}<figcaption>${breed}</figcaption></figure>`;
        ul.appendChild(newLi);


    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const dogCard = document.querySelector('ul')
    dogCard.children[0].remove()
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const dogCard = document.querySelector('ul')
    dogCard.lastChild.remove()
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});

// window.onload();