// MUST HAVE /scripts/pages.js SOURCED BEFOREHAND

function randFromArr(arr) {
    // select random name from list
    return arr[Math.floor(Math.random() * arr.length)];
}

// remove disallowed page names
const rp_disallowed_pages = ["Homepage", "Search"];
const rp_allowed_pages = Object.keys(pages)
    .filter(name => !rp_disallowed_pages.includes(name));

// get the right element
let randomPage = document.getElementById("randomPage");

// select obj
let selected = randFromArr(rp_allowed_pages); 

// create element
let randLink = document.createElement("a");

// fill randLink fields before appending
randLink.href = pages[selected]["link"];
randLink.classList.add("link-light")
randLink.innerText = selected;

randomPage.appendChild(randLink);