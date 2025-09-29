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
console.log("Loading before image:", dogsBefore[name]);


const image = document.getElementById("image");
const dogAfter = document.getElementById("dogAfter");
const title = document.getElementById("title");
const closeImg = document.getElementById("close");
const img = document.getElementById("img");
const para = document.getElementById("adopt");

for (let name in dogsBefore) {
    const dogDiv = document.createElement("div");
    dogDiv.classList.add("dog-style");

    const img = document.createElement("img");
    img.src = dogsBefore[name];
    img.alt = name;

    const caption = document.createElement("div");
    caption.classList.add("adopt");
    caption.textContent = `please adopt ${name}`;
    // img.src = dogsAfter[name];
    dogDiv.onclick = function() {
        popup.classList.remove("hidden");
        popupTitle.textContent = `${name} after adoption`;
        popupImg.src = dogsAfter[name];
    };

    dogDiv.appendChild(img);
    dogDiv.appendChild(caption);
    image.appendChild(dogDiv);
}

closeImg.onclick = function() {
    dogAfter.classList.add("hidden");
};

