function randFromObj(obj) {
    // select random object from pages
    // and return the name
    let keys = Object.keys(obj);
    return keys[Math.round(Math.random() * keys.length) - 1];
}

const pages = 
{
    "Scandinavian Defense": {
        "moves": [
            "e4", "d5", "exd5"
        ],
        "link": "./openings/scandinavian_defense/mainline.html"
    },

    "Queen's Gambit": {
        "moves": [
            "d4", "d5", "c4"
        ],
        "link": "./openings/queens_gambit/mainline.html"
    }
};

// get the right element
let randomPage = document.getElementById("randomPage");

// select object >> randFromObject returns the name of the object,
let selected = randFromObj(pages); 

// create element
let node = document.createElement("p");
let innerLinkNode = document.createElement("a");

// fill innerLinkNode fields before appending
innerLinkNode.href = pages[selected]["link"];
innerLinkNode.innerText = selected;

node.appendChild(innerLinkNode);
randomPage.appendChild(node);