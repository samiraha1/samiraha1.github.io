function drawBtn() {
    const scene = document.getElementById("scene");
    scene.innerHTML = "";

    const now = new Date();
    const hour = now.getHours();

    if (hour >= 18 || hour < 6) {
        scene.classList.remove("day");
        scene.classList.add("night");
        const moon = document.createElement("div");
        moon.classList.add("moon");
        scene.appendChild(moon);
    } else {
        scene.classList.remove("night");
        scene.classList.add("day");
        const sun = document.createElement("div");
        sun.classList.add("sun");
        scene.appendChild(sun);
    }

    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.top = Math.random() * 150 + "px";
        cloud.style.left = Math.random() * (window.innerWidth - 100) + "px";
        scene.appendChild(cloud);
    }

    for (let i = 0; i < 6; i++) {
        const tree = document.createElement("div");
        tree.classList.add("tree");
        tree.style.left = Math.random() * (window.innerWidth - 100) + "px";
        scene.appendChild(tree);
    }
};