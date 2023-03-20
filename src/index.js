import "./styles.css";
import makeHome from "./home";
console.log(1);



function createEl(type,text) {
    let obj = document.createElement(type);
    let content = document.createTextNode(text);
    obj.appendChild(content);
    
    return obj
}

let nav = document.getElementById("nav");
let contentBlock = document.getElementById("content")

nav.addEventListener("click", (e) => {
    let page = e.target.innerHTML.toLowerCase();
    
    if(page === "home") {         
        makeHome(contentBlock);
    }
    else if(page === "menu") {
        
        console.log(2);
    }

    else if(page === "contact") {
        
        console.log(3);
    }




})

export {createEl}