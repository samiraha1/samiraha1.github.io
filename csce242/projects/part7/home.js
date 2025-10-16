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
    document.getElementById("mainSec-nav").classList.toggle("active");
}
function addPlaylist() {
    const playlistName = prompt("Enter playlist name:");
    if(playlistName && playlistName.trim() !== "") {
        const ul = document.getElementById("playlistList");
        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = "playlist.html?name=" + encodeURIComponent(playlistName);
        link.textContent = playlistName;

        li.appendChild(link);
        ul.appendChild(li);
    }
}

function getPlaylistName(){
    const params = new URLSearchParams(window.location.search);
    return params.get("name");
}
function addMovie(){
    const movie = prompt("Enter Movie Name:");
    if(movie && movie.trim() !== "") {
        const ul = document.getElementById("movieList");
        const li = document.getElementById("li");
        li.textContent = SpeechRecognitionAlternative;
        ul.appendChild(li);
    }   
}
window.onload = function() {
    this.document.getElementById("playlistTitle").textContent = getPlaylistName();
}