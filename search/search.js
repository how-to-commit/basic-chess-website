const sitemap = 
{
    "Main": {
        "moves": [],
        "link": "./../index.html"
    },

    "Search": {
        "moves": [],
        "link": "./search.html"
    },

    "Scandinavian Defense": {
        "moves": [
            "e4", "d5", "exd5"
        ],
        "link": "tests"
    },

    "Queen's Gambit": {
        "moves": [
            "d4", "d5", "c4"
        ],
        "link": "testq"
    }
};


function search(str) {
    // filter input
    str = str.trim().toLowerCase();

    const results = [];
    for (let page in sitemap) {
        if (page.toLowerCase().includes(str) || sitemap[page]["moves"].indexOf(str) != -1) {
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
            resultLink.href = sitemap[result]["link"];
            resultLink.innerText = result

            resultPara.appendChild(resultLink);
            resultSpan.appendChild(resultPara);

            // horizontal rule
            resultSpan.appendChild(document.createElement("hr"));
        }
    }
    console.log(results);
}
