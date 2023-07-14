const NEWSAPI_URL =
  "https://newsapi.org/v2/sources?apiKey=a9c241399e2d4b609fac5b8b2b293684";
const API_KEY = "a9c241399e2d4b609fac5b8b2b293684";
const main = document.querySelector("main");
let rotateInterval;
const createQueryUrl = (params) => {
  const queryString = new URLSearchParams(params).toString();
  return `${NEWSAPI_URL}&${queryString}`;
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("Dom Loaded");
  fetchNews();
  rotateInterval = setInterval(rotateCards, 3000);
});

document.getElementById("queryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const category = document.getElementById("categoryInput").value;
  const country = document.getElementById("countryInput").value;
  const language = document.getElementById("languageInput").value;

  const queryParameters = {
    apiKey: API_KEY,
    category: category,
    country: country,
    language: language,
  };

  const queryUrl = createQueryUrl(queryParameters);

  fetchNews(queryUrl);
});

const fetchNews = (url = NEWSAPI_URL) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showNews(data.sources);
      document.getElementById("queryForm").reset();
    })
    .catch((error) => {
      showError(error);
    });
};

const showNews = (sources) => {
  if (!sources) {
    console.log("No sources to show");
    return;
  }

  const sortedSources = sources.sort((a, b) => a.name.localeCompare(b.name));

  main.innerHTML = "";

  sortedSources.forEach((source, index) => {
    const panel = document.createElement("div");
    panel.classList.add("panel");
    panel.id = `panel-${index}`;

    const language = document.createElement("span");
    language.classList.add("panel-language");
    language.textContent = source.language.toUpperCase();
    panel.appendChild(language);

    const country = document.createElement("h3");
    country.classList.add("panel-country");
    country.textContent = countryCodes[source.country];
    panel.appendChild(country);

    const description = document.createElement("p");
    description.classList.add("panel-description");
    description.textContent = source.description;
    panel.appendChild(description);

    const name = document.createElement("h2");
    name.classList.add("panel-title");
    name.textContent = source.name;
    panel.appendChild(name);

    const readMore = document.createElement("a");
    readMore.classList.add("panel-link");
    readMore.textContent = "Read more";
    readMore.href = source.url;
    panel.appendChild(readMore);

    const category = document.createElement("h3");
    category.classList.add("panel-category");
    category.textContent = source.category.toUpperCase();
    panel.appendChild(category);

    main.appendChild(panel);
  });
  const categoryElement = document.querySelector(".panel-category");

  const category = categoryElement.textContent;

  if (category === "Business") {
    categoryElement.classList.add("business");
  } else if (category === "ENTERTAINMENT") {
    categoryElement.classList.add("entertainment");
  } else if (category === "GENERAL") {
    categoryElement.classList.add("general");
  } else if (category === "HEALTH") {
    categoryElement.classList.add("health");
  } else if (category === "SCIENCE") {
    categoryElement.classList.add("science");
  } else if (category === "TECHNOLOGY") {
    categoryElement.classList.add("technology");
  } else if (category === "SPORTS") {
    categoryElement.classList.add("sports");
  }
};

let currentIndex = 0;
const rotateCards = () => {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel, index) => {
    if (index === currentIndex) {
      panel.style.transform = "rotateY(0deg)";
      panel.style.opacity = "1";
    } else if (index === (currentIndex + 1) % panels.length) {
      panel.style.transform = "rotateY(90deg)";
      panel.style.opacity = "0";
    } else if (index === (currentIndex + 2) % panels.length) {
      panel.style.transform = "rotateY(180deg)";
      panel.style.opacity = "0";
    } else {
      panel.style.transform = "rotateY(0deg)";
      panel.style.opacity = "0";
    }
  });
  currentIndex = (currentIndex + 1) % panels.length;
};

main.addEventListener("mouseover", (e) => {
  const panel = e.target.closest(".panel");
  if (!panel) {
    return;
  }
  clearInterval(rotateInterval);
});

main.addEventListener("mouseout", (e) => {
  const panel = e.target.closest(".panel");
  if (!panel) {
    return;
  }
  rotateInterval = setInterval(rotateCards, 3000);
});

const openInSameTab = (e) => {
  e.preventDefault();
  window.open(e.target.href, "_self");
};

const showError = (err) => {
  main.innerHTML = `
    <section class="error">
    <p>An error has occurred!</p>
    <p class="message">${err}</p>
    </section>`;
};

window.addEventListener("scroll", function () {
  var navLink = document.getElementById("scrollToTopLink");
  if (window.scrollY > 200) {
    navLink.style.display = "block";
  } else {
    navLink.style.display = "none";
  }
});

document
  .getElementById("scrollToTopLink")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

window.addEventListener("resize", function () {
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(function () {
    location.reload();
  }, 500);
});
