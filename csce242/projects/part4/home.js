const toggleBtn = document.getElementById("menu-togglee");
const newMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", () => {
    navMenu.style.display = 
    navMenu.style.display === "flex" ? "none" :"flex";
})