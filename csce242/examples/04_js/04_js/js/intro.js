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
    console.log("Hello World!")
};
