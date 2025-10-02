const getShoes = () => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){

    }
};
const showShoes = () =>{
    const shoes = await getShoes();
    shoes.forEach((shoes)=>{
        const  name = document.createElement("section");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const ul = document.createElement("ul");
        name.append("");
        name.append(h3);
        name.append(p);
        name.append(ul);



    });
};
showShoes();