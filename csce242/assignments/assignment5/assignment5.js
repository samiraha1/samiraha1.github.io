document.getElementById("btn3").onclick = () => {
    const image = document.getElementById("img");
    console.log(image.src);

    if(image.src.includes("images/cloud1.png")){
        image.src = "images/sun.png";
        console.log("Switched to sun.png");
    } else {
        image.src = "images/cloud1.png";
        console.log("switched back")
    }
}
document.getElementById("btn1").onclick = () => {
    const image = document.getElementById("img");
    console.log(image.src);