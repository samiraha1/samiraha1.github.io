const slider = document.getElementById("plantRange");
const output = document.getElementById("demo");
output.textContent = slider.value + " plantRange";

slider.oninput = function(){
    output.textContent = this.value + " plantRange";
};