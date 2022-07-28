// MUST HAVE /scripts/pages.js SOURCED BEFOREHAND

function search(str) {  
    // filter input
    str = str.trim().toLowerCase();
    
    const results = [];    // declare arr here to leave blank for later if query has nothing
    if (str.length != 0) { // only run the search if the query has characters
        for (let page in pages) {
            if (page.toLowerCase().includes(str) || pages[page]["moves"].join().replace(/,/g, " ").toLowerCase().includes(str)) {
                results.push(page);
            }
        }
    }
    const resultSpan = document.getElementById("search-results");

    // clear all results from previous search
    resultSpan.textContent = '';
    // horizontal rule to not look awkward
    resultSpan.appendChild(document.createElement("hr"));

    // loop through results to display
    if (results.length == 0) {
        // if no results or query has no characters ->
        const resultPara = document.createElement("p");
        resultPara.innerText = "Whoops! Nothing here. Try another name or another move?"
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
