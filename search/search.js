let sitemap = 
{
    "Main": {
        "moves": [],
        "link": "./index.html"
    },

    "Search": {
        "moves": [],
        "link": "./search/search.html"
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

for (page in sitemap) {
    console.log(page);
}

function search(str) {
    // filter input
    str = str.trim().toLowerCase();

    let results = [];
    for (page in sitemap) {
        if (page.toLowerCase().includes(str) || sitemap[page]["moves"].indexOf(str) != -1) {
            results.push(page);
        }
    }
    
    console.log(results);
}
