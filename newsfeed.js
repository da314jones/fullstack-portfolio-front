
//variable for api
const NEWSAPI_URL = "https://newsapi.org/v2/top-headlines/sources?apiKey=1681be04f001473c982be84269c6cec3";

//locate button and 
// const button = document.querySelector("button");
const main = document.querySelector("main");

//fetch and catch eventListener
// button.addEventListener("click", (e) => {
//     e.preventDefault();
//     fetch(`${NEWSAPI_URL}`)
//         .then((response) => response.json())
//         .then((data) => {
//             showNews(data);
//         })
//         .catch((err) => {
//             showError(err);
//         })
// });

document.addEventListener("DOMContentLoaded", function() {
    console.log("gey Dom Loaded")
    fetch(`${NEWSAPI_URL}`)
        .then((response) => response.json())
        .then((data) => {
            showNews(data);
        })
        .catch((err) => {
            showError(err);
        })
});
 
//event listener for form
document.getElementById("queryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const query = document.getElementById("queryInput").value;
    const sources = document.getElementById("sourcesInput").value;
    const language = document.getElementById("languageInput").value;

    //query parameters
    const queryParameters = {
        apiKey: "1681be04f001473c982be84269c6cec3",
        q: query,
        sources: sources,
        language: language,
        sortBy: "publishedAt",
        pageSize: 20,
        page: 1,
    };

    // create url
    const queryUrl = createQueryUrl(queryParameters);

    //fetch query data from api
    fetch(queryUrl)
    .then(response => response.json())
    .then(data => {
        showResults(data.articles);
    })
    .catch(error => {
        console.error(error);
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

        const country = document.createElement("h2");
        country.textContent = source.country;
        panel.appendChild(country);

        const name = document.createElement("h3");
        name.textContent = source.name;
        panel.appendChild(name);

        const description = document.createElement("p");
        description.textContent = source.description;
        panel.appendChild(description);

        const readMore = document.createElement("a");
        readMore.textContent = "Read more";
        readMore.href = source.url;
        readMore.addEventListener("click", openInSameTab);
        panel.appendChild(readMore)
        
        main.appendChild(panel)
    })
}

const openInSameTab = (e) => {
    e.preventDefault();
    window.open(e.target.href, "_blank")
};

const showError = (err) => {
    main.innerHTML = `
    <section class="error">
    <p>An error has occurred!</p>
    <p class="message">${err}</p>
    </section>`;
}