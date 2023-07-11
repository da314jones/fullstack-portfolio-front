
//variable for api
const NEWSAPI_URL = "https://newsapi.org/v2/top-headlines/sources?apiKey=1681be04f001473c982be84269c6cec3";

//locate button and 
const button = document.querySelector("button");
const main = document.querySelector("main");

//fetch and catch eventListener
button.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(NEWSAPI_URL)
        .then((response) => response.json())
        .then((data) => {
            showNews(data);
        })
        .catch((err) => {
            showError(err);
        })
});

const showNews = (data) => {
    main.innerHTML = "";

    data.sources.forEach((source) => {
        const panel = document.createElement("div");
        panel.classList.add("panel");

        const category = document.createElement("p");
        category.textContent = source.category;
        panel.appendChild(category);

        const name = document.createElement("h2");
        name.textContent = source.name;
        panel.appendChild(name);

        const description = document.createElement("p");
        description.textContent = source.description;
        panel.appendChild(description);

        const readMore = document.createElement("a");
        readMore.textContent = "Read more";
        readMore.href = source.url;
        readMore.target = "_blank";
        panel.appendChild(readMore)
        

        main.appendChild(panel)
    })
}
const showError = (err) => {
    main.innerHTML = `
    <section class="error">
    <p>An error has occurred!</p>
    <p class="message">${err}</p>
    </section>`;
}