const slider = document.getElementById("plantRange");
const days = document.getElementById("day")
const stat = document.getElementById("stat")
const imagePlant = document.getElementById("plantImage")

function toggleMenu() {
    const btn = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    nav.classList.toggle("active");

    btn.textContent = nav.classList.contains("active") ? "▲" : "▼" ;
}



slider.oninput = () => {
  let daysNumber = document.getElementById("plantRange").value;

  days.textContent = `It's been ${daysNumber} day${
    daysNumber !== 1 ? "s" : ""
  } since watering your plant`;

  if (daysNumber >= 1 && daysNumber <= 2) {
    document.getElementById("plantImage").src = "images/healthy.png";
    stat.textContent = "Your plant is healthy and happy";

  }  else if (daysNumber >= 3 && daysNumber <= 5) {
    document.getElementById("plantImage").src = "images/watered.png";
    stat.textContent = "Your plant needs watering";
  } else if (daysNumber >= 6 && daysNumber <= 9) {
    document.getElementById("plantImage").src = "images/withered.png";
    stat.textContent = "The leaves are starting to drop, water soon!";
  } else if (daysNumber >= 10 && daysNumber <= 12) {
    document.getElementById("plantImage").src = "images/dead.png";
    stat.textContent = "your plant is dead...";
  } else {
    // imagePlant.src = "";
    stat.textContent = "Slide for the amount of days watered";
    days.textContent = "Use the slider to set days";
  }

  console.log(document.getElementById("stat"));
};