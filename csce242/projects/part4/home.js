// const toggleBtn = document.getElementById("menu-togglee");
// const newMenu = document.getElementById("nav-menu");

// document.getElementById("example1").onclick = () => {
//     document.getElementById("plants-section").style.display = "block";
//     document.getElementById("clock-section").style.display = "none";
// }
// document.getElementById("example2").onclick = () => {
//     document.getElementById("plants-section").style.display = "none";
//     document.getElementById("clock-section").style.display = "block";
// }
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
function addPlaylist() {
    const playlistName = prompt("Enter playlist name:");
    if(playlistName && playlistName.trim() !== "") {
        const ul = document.getElementById("playlistList");
        const li = document.createElement("li");
        li.textContent = playlistName;
        ul.appendChild(li);
    }
}