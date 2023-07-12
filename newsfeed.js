
//variable for api
const NEWSAPI_URL = "https://newsapi.org/v2/sources?apiKey=a9c241399e2d4b609fac5b8b2b293684";
const API = "a9c241399e2d4b609fac5b8b2b293684"
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

document.addEventListener("DOMContentLoaded", function () {
    console.log("Dom Loaded")
    fetchNews();
});

//event listener for form
document.getElementById("queryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const category = document.getElementById("categoryInput").value;
    const country = document.getElementById("countryInput").value;
    const language = document.getElementById("languageInput").value;
    const name = document.getElementById("nameInput").value;

    //query parameters
    const queryParameters = {
        apiKey: API,
        category: category,
        country: country,
        language: language,
        name: name,
    };

    // create url
    const queryUrl = createQueryUrl(queryParameters);

    //fetch query data from api
    fetchNews(queryUrl);
});

//create url to encoding 
const createQueryUrl = (params) => {
    const queryString = Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    return `${NEWSAPI_URL}?${queryString}`;
}

const fetchNews = (url = NEWSAPI_URL) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            showNews(data.sources);
            document.getElementById("queryForm").reset();
        })
        .catch(error => {
            showError(error);
        })
}

// modify for user query
const showNews = (sources) => {
    console.log(sources)
    main.innerHTML = "";

    sources.forEach((source) => {
        const panel = document.createElement("div");
        panel.classList.add("panel");

        const name = document.createElement("h2");
        name.textContent = source.name;
        panel.appendChild(name);

        const description = document.createElement("p");
        description.textContent = source.description;
        panel.appendChild(description);

        const category = document.createElement("h3");
        category.textContent = source.category.toUpperCase();
        panel.appendChild(category);

        const country = document.createElement("h3");
        country.textContent = source.country.toUpperCase();
        panel.appendChild(country);

        const language = document.createElement("p");
        language.textContent = source.language.toUpperCase();
        panel.appendChild(language);

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