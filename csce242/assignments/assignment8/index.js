
const dogsBefore = {
    "Luna": "images/dog.jpg",
    "Bella": "images/dog2.jpg",
    "Charlie": "images/dog3.jpg",
    "Max": "images/dog4.jpg"
};

const dogsAfter = {
    "Luna": "images/dogAfter.jpg",
    "Bella": "images/dog2After.jpg",
    "Charlie": "images/dog3After.jpg",
    "Max": "images/dog4After.jpg"
};


const image = document.getElementById("image");
const dogAfter = document.getElementById("dogAfter");
const title = document.getElementById("title");
const closeImg = document.getElementById("closeImg");
const popupImg = document.getElementById("popupImg");


for (let name in dogsBefore) {
    const dogDiv = document.createElement("div");
    dogDiv.classList.add("dog-style");

    const img = document.createElement("img");
    img.src = dogsBefore[name];
    img.alt = name;

    const caption = document.createElement("div");
    caption.classList.add("adopt");
    caption.textContent = `Please adopt ${name}`;


    dogDiv.onclick = function () {
        dogAfter.classList.remove("hidden");
        title.textContent = `${name} after adoption`;
        popupImg.src = dogsAfter[name];
    };

    dogDiv.appendChild(img);
    dogDiv.appendChild(caption);
    image.appendChild(dogDiv);
}


closeImg.onclick = function () {
    dogAfter.classList.add("hidden");
};


