// function toggleMenu() {
//     const btn = document.getElementById("menu-toggle");
//     const nav = document.getElementById("nav");

//     nav.classList.toggle("active");

//     btn.textContent = nav.classList.contains("active") ? "▲" : "▼" ;
//     console.log("worked")
// }
// function updateClock(){
//     const now = new Date();

//     let hours = now.getHours();
//     let min = now.getMinutes();
//     let sec = now. getSeconds();
//     let amPm = hours >= 12 ? "pm" : "am";

//     hours = hours % 12;
//     hours = hours ? hours : 12;

//     min = min < 10 ? "0" + min : min;
//     sec= sec < 10 ? "0" + sec : sec;

//     const time = `${hours}:${min} ${amPm}`;

//     document.getElementById("clock").textContent = time;
    
// }
// console.log("worked")
// updateClock();
// setInterval(updateClock, 1000);