/*DONT use var*/
/*const by default and then let if need be */
/*DONT use function */
/*
const sayHello = () => {
    console.log("Hello World!");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onClick = () => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    document.getElementById("btn-click-me").classList.add("clicked");
    console.log(event.currentTarget).classList.add("Clicked");
};

document.getElementById("btn-happy").onclick = () => {
    pFeeling.innerHTML = "YAY";
    pFeeling.classList.add("Happy") ;
}

document.getElementById("btn-happy").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("sad") ;
    pFeeling.classList.remove("Happy") ;
}
