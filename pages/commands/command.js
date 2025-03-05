const title = document.getElementById("title");
const header = document.getElementById("header");
const content = document.getElementById("content");

const params = new URLSearchParams(window.location.search);
const command = params.get("command")


title.textContent = `${command} | MC Command Wiki`;


let currentPage;
const load = async function() {
    await fetch("pages.json").then(res => res.json()).then(data => {
        data.forEach(page => {
            if(page.name === command){
                currentPage = page;
            }
        });
    })

    header.textContent = currentPage.header;
    
    content.innerHTML = currentPage.content;
}

load();