const searchBar = document.getElementById("search-bar");
const resultsDisplay = document.getElementById("results");

const resultTemplate = document.querySelector("[data-result-template]");

searchBar.focus();

let pages = [];
fetch("commands.json").then(res => res.json()).then(data => {
    data.forEach(page => {
        pages.push(page);
    });
});

searchBar.addEventListener("input", e =>{
    const searchTerm = e.target.value.toLowerCase();
    resultsDisplay.innerHTML = ""
    if (searchTerm !== ""){
        pages.forEach(page => {
            if (page.name.includes(searchTerm)){
                const resultCard = resultTemplate.content.cloneNode(true).children[0];
                const cardName = resultCard.querySelector("[data-result-name]");
                const cardSummary = resultCard.querySelector("[data-result-summary]");
                const name = page.name;
                const summary = page.description;

                cardName.textContent = name;
                cardName.href = `commands/${name}.html`;
                cardSummary.textContent = summary;

                resultsDisplay.append(resultCard);
                
            }
        });
    }
})

