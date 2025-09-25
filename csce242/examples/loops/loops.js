document.getElementById("btn-count").onclick = () => {

}

document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball", "skipping rope", "doll", "mini-car", "elmo"];

    /*forst way toiterate*/
    for(let i=0; i<toys.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }

    /* second way */
    toys.forEach(()=>{})
}