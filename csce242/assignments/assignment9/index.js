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
        const image = document.createElement("img");
        image.innerHTML= this.image;
        paintSection.appendChild(image);
        return paintSection;
    }
}
window.onload = () => {
    let paints = [];
    let paintList = document.getElementById("paint-list");
    paints.push(new paintings("The Persistance of Memory", "Salvador Dali", "images/persistance.jpg", "framed"));
    paints.push(new paintings("Woman with a Parasol", "Claude Monet", "images/womanWithParasol.jpg", "not framed"));
    paints.push(new paintings("Cafe Terrace at Night", "Van Gogh", "images/cafe_terrace.jpg", "framed"));
    paints.push(new paintings("Hybrid Variegated Pink and Scarlet Spider Chrysanthemum", "Keika Hasegawa", "images/scarlet_spider.jpg", " not framed"));
    paints.push(new paintings("The Amida Falls in the Far Reaches of the Kisokaidō Road", "Katsushika Hokusai", "images/amidaFalls.jpg", "framed"));


    for (let i in paints){
        paintList.append(paints[i].item);
    }
    
}