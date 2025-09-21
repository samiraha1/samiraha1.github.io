const slider = document.getElementById("plantRange");
// const output = document.getElementById("demo");
const days = document.getElementById("day")
const stat = document.getElementById("stat")
const imagePlant = document.getElementById("plantImage")

output.textContent = slider.value + " plantRange";
 

// slider.oninput = function(){
//     output.textContent = this.value + " plantRange";
// };

slider.addEventListener("input", function() {
    const daysNumber = parseInt(this.value);

    days.textContent = `It's been ${daysNumber} day${daysNumber !== 1 ? "s" : ""} since watering your plant`;

    if(daysNumber >= 1 && daysNumber <=2){
        imagePlant.src = "images/healthy.png";
        stat.textContent = "Your plant is healthy and happy";
    } else if(daysNumber >= 3 && daysNumber <= 5){
        imagePlant.src="images/watered.png";
        stat.textContent = "Your plant needs watering";
    } else if(daysNumber >= 3 && daysNumber <= 5){
        imagePlant.src = "images/withered.png";
        stat.textContent = "The leaves are starting to drop, water soon!";
    } else if(daysNumber >= 3 && daysNumber <= 5){
        imagePlant.src = "im";
        stat.textContent = "your plant is dead...";
    } else {
        imagePlant.src = "";
        stat.textContent = "";
        days.textContent = "Use the slider to set days";
    }
    
console.log(document.getElementById("stat"));
});