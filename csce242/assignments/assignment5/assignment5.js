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
document.getElementById("first1").onclick = () => {
    const suns = document.getElementById("sun");
    suns.classList.toggle("hidden");
    console.log("Toggeled text", Text.classList.contains("hidden"));
}

const toggle = document.getElementById("btn2");
const colorPicker = document.getElementById("color-picker");
const colorText = document.getElementById("color-text");

toggle.onclick = () => {
    colorPicker.classList.toggle("hidden");
}
colorPicker.oninput = (event) => {
    const chosenColor = event.target.value;
    colorText.style.color = chosenColor;
    console.log("Picked color:", chosenColor);
}