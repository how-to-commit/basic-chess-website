const pages = 
{
    "Main": {
        "moves": [],
        "link": "./index.html"
    },

    "Search": {
        "moves": [],
        "link": "./search.html"
    },

    "Scandinavian Defense - Mainline": {
        "moves": [
            "e4", "d5", "exd5"
        ],
        "link": "./openings/scandinavian_defense/mainline.html"
    },

    "Queen's Gambit - Mainline": {
        "moves": [
            "d4", "d5", "c4"
        ],
        "link": "./openings/queens_gambit/mainline.html"
    }
};


function search(str) {
    // filter input
    str = str.trim().toLowerCase();

    const results = [];
    for (let page in pages) {
        if (page.toLowerCase().includes(str) || pages[page]["moves"].join().replace(/,/g, " ").toLowerCase().includes(str)) {
            results.push(page);
        }
    }

    const resultSpan = document.getElementById("search-results");

    // clear all results from previous search
    resultSpan.textContent = '';
    // horizontal rule to not look awkward
    resultSpan.appendChild(document.createElement("hr"));

    // loop through results to display
    if (results.length == 0) {
        // if no results
        const resultPara = document.createElement("p");
        resultPara.innerText = "Whoops! Nothing here. Try another name?"
        resultSpan.appendChild(resultPara);

        // hr
        resultSpan.appendChild(document.createElement("hr"));

    } else {
        // there are results
        for (let result of results) {
            const resultPara = document.createElement("p");
            const resultLink = document.createElement("a");
            
            // fill resultLink fields
            resultLink.href = pages[result]["link"];
            resultLink.classList.add("link-light") //light with bootstrap
            resultLink.innerText = result

            resultPara.appendChild(resultLink);
            resultSpan.appendChild(resultPara);

            // horizontal rule
            resultSpan.appendChild(document.createElement("hr"));
        }
    }
}
