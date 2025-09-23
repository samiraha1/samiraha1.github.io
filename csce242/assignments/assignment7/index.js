function drawBtn() {
    const scene = document.getElementById("scene");
    scene.innerHTML = "";

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
    const sun = document.createElement("div");
    sun.classList.add("sun");
    sun.style.left = Math.random() * (window.innerWidth - 100) + "px";
    scene.appendChild(sun);
};