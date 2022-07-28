// MUST HAVE /scripts/pages.js SOURCED BEFOREHAND

const article_list = Object.keys(pages).sort();
const mainNode = document.getElementById("article-list");

for (let article of article_list) {
    let list = document.createElement("li");
    let link = document.createElement("a");

    link.innerText = article;
    link.href = pages[article]["link"];
    link.classList.add("link-light");
    list.appendChild(link);
    mainNode.appendChild(list);
}