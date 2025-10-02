class paintings{
    constructor( name, artist, image, frame) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.frame = frame;
    }

    get item() {
        const paintSection = document.createElement("div");
        paintSection.classList.add("art");
        const heading = document.createElement("h4");
        heading.innerText= this.name;
        paintSection.appendChild(heading);
        
        paintSection.appendChild(this.picture(this.image));
        paintSection.onclick = () => displayPic(this);

        return paintSection;
    }
    picture(image){
        const picItem = document.createElement("img")
        picItem.src = "images/" + image;
        return picItem;
    }
}
const displayPic = (paintings) => {
    const paintDetails = document.getElementById("paint-details");
    paintDetails.innerHTML = "";

    const h4 = document.createElement("h4");
    h4.textContent = paintings.name;

    const p = document.createElement("p");
    p.textContent = paintings.artist;

    const img = document.createElement("img");
    img.src = "images/" + paintings.image;
    if(paintings.frame) {
        img.classList.add("frame")
    }

    paintDetails.append(h4);
    paintDetails.append(`by: ${paintings.artist}`);
    paintDetails.append(img);

    // return paintDetails;
    
        paintDetails.classList.remove("hidden");
        overlay.classList.remove("hidden");
        overlay.onclick = () => {
            overlay.classList.add("hidden");
            paintDetails.classList.add("hidden");
        }
    
        // Boolean frame = document.getElementById("frame");
};

window.onload = () => {
    let paints = [];
    let paintList = document.getElementById("paint-list");
    paints.push(new paintings("The Persistance of Memory", "Salvador Dali", "persistance.jpg", true));
    paints.push(new paintings("Woman with a Parasol", "Claude Monet", "womanWithParasol.jpg", false));
    paints.push(new paintings("Cafe Terrace at Night", "Van Gogh", "cafe_terrace.jpg", true));
    paints.push(new paintings("Hybrid Variegated Pink and Scarlet Spider Chrysanthemum", "Keika Hasegawa", "scarlet_spider.jpg", false));
    paints.push(new paintings("The Amida Falls in the Far Reaches of the Kisokaidō Road", "Katsushika Hokusai", "amidaFalla.jpg", true));


    for (let i in paints){
        paintList.append(paints[i].item);
    }
    
};