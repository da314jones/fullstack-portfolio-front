const NEWSAPI_URL =
  "https://newsapi.org/v2/sources?apiKey=a9c241399e2d4b609fac5b8b2b293684";
const API_KEY = "a9c241399e2d4b609fac5b8b2b293684";
const panelMain = document.querySelector(".panel-container");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
  fetchNews();
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

const getCategoryColor = (category) => {
  let color = "";
  switch (category) {
    case "BUSINESS":
      color = "blue";
      break;
    case "ENTERTAINMENT":
      color = "yellow";
      break;
    case "GENERAL":
      color = "black";
      break;
    case "HEALTH":
      color = "cyan";
      break;
    case "SCIENCE":
      color = "green";
      break;
    case "SPORTS":
      color = "red";
      break;
    case "TECHNOLOGY":
      color = "rgb(25, 98, 98)";
      break;
    default:
      color = "gray";
      break;
  }
  return color;
};

const showNews = (sources) => {
  if (!sources) {
    console.log("No sources to show");
    return;
  }

  let panel = "";
  const categoryColors = {
    BUSINESS: "green",
    ENTERTAINMENT: "yellow",
    GENERAL: "black",
    HEALTH: "blue",
    SCIENCE: "orange",
    SPORTS: "red",
    TECHNOLOGY: "purple",
  };

  for (let i = 0; i < sources.length; i++) {
    const category = sources[i].category;
    const color = getCategoryColor[category] || "blue";
    
    panel += `
      <div class="card-stack" style="animation-delay: ${i * .2}s;">
        <div class="card card-${i + 1}">
          <h3>${sources[i].name}</h3>
          <p>${sources[i].description}</p>
          <p class="category ${sources[i].category.toUpperCase()}">${sources[i].category.toUpperCase()}</p>
          <p>${sources[i].language.toUpperCase()}</p>
          <p>${getFullCountryName(sources[i].country)}</p>
          <a href="${sources[i].url}" target="_self">${sources[i].url}</a>
        </div>
      </div>
    `;
  }
  panelMain.innerHTML = panel;

 setTimeout(addAnimationToCards, 1000);
};

const addAnimationToCards = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.animation = `fadeAway ${cards.length * 2}s infinite ${index * 2}s`;
  });
};


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

window.addEventListener("resize", function () {
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(function () {
    location.reload();
  }, 500);
});
