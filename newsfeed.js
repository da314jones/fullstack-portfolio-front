
//variable for api
const NEWSAPI_URL = "https://newsapi.org/v2/sources?apiKey=a9c241399e2d4b609fac5b8b2b293684";
const API_KEY = "a9c241399e2d4b609fac5b8b2b293684"
//locate button and 
// const button = document.querySelector("button");
const main = document.querySelector("main");
const createQueryUrl = (params => {
    const queryString = new URLSearchParams(params).toString();
    return `${NEWSAPI_URL}&${queryString}`;
})

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

    const queryParameters = {
        apiKey: API_KEY,
        category: category,
        country: country,
        language: language
    };

    const queryUrl = createQueryUrl(queryParameters);

    fetchNews(queryUrl);
});

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

const showNews = (sources) => {
    if (!sources) {
        console.log('No sources to show');
        return;
    }

    // Sort sources by name
    const sortedSources = sources.sort((a, b) => a.name.localeCompare(b.name));
    
    main.innerHTML = "";

    sortedSources.forEach((source) => {
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

        const language = document.createElement("span");
        language.textContent = source.language.toUpperCase();
        panel.appendChild(language);

        const readMore = document.createElement("a");
        readMore.textContent = "Read more";
        readMore.href = source.url;
        // readMore.addEventListener("click", openInSameTab);
        panel.appendChild(readMore)

        main.appendChild(panel)
    })
}

const openInSameTab = (e) => {
    e.preventDefault();
    window.open(e.target.href, "_self")
};

const showError = (err) => {
    main.innerHTML = `
    <section class="error">
    <p>An error has occurred!</p>
    <p class="message">${err}</p>
    </section>`;
}

window.addEventListener("scroll", function() {
    var navLink = document.getElementById("scrollToTopLink");
    if (window.scrollY > 200) {
        navLink.style.display = "block";
    } else {
        navLink.style.display = "none";
    }
});

document.getElementById("scrollToTopLink").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth" });
});

document.getElementById("main").addEventListener("click", function(e) {
    if (e.target.tagName.toLowerCase() ==="a") {
        e.preventDefault();

        document.getElementById("return-to-page-message").style.display = "block"
    }
});