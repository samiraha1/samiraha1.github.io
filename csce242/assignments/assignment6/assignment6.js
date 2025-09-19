const slider = document.getElementById("plantRange");
const output = document.getElementById("demo");
output.textContent = slider.value + " plantRange";

slider.oninput = function(){
    output.textContent = this.value + " plantRange";
};

function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now. getSeconds();
    let amPm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    min = min < 10 ? "0" + min : min;
    sec= sec < 10 ? "0" + sec : sec;

    const time = `${hours}:${min} ${amPm}`;

    document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);