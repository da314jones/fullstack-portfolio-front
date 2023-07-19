const NEWSAPI_URL = "https://newsapi.org/v2/sources?apiKey=a9c241399e2d4b609fac5b8b2b293684";
const API_KEY = "a9c241399e2d4b609fac5b8b2b293684";
const panelMain = document.querySelector(".panel-container");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
  fetchNews(NEWSAPI_URL);
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

function createQueryUrl(queryParameters) {
  const params = new URLSearchParams(queryParameters).toString();
  return `${NEWSAPI_URL}&${params}`;
}

const fetchNews = (url) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if(data.status === 'ok'){
        showNews(data.sources);
        document.getElementById("queryForm").reset();
      } else {
        throw new Error(data.message);
      }
    })
    .catch((error) => {
      showError(error);
    });
};

const showNews = (sources) => {
  if (!sources || sources.length === 0) {
    panelMain.innerHTML = "<p>No sources found</p>";
    console.log("No sources to show");
    return;
  }

  let panel = "";
  
  for (let i = 0; i < sources.length; i++) {
    const category = sources[i].category;
    const color = getCategoryColor(category.toUpperCase()) || "blue";
    
    panel += `
      <div class="card-stack" style="animation-delay: ${i * .2}s;">
        <div class="card card-${i + 1}" style="border-color: ${color}">
          <h3>${sources[i].name}</h3>
          <p>${sources[i].description}</p>
          <p class="category ${category.toUpperCase()}">${category.toUpperCase()}</p>
          <p>${sources[i].language.toUpperCase()}</p>
          <p>${sources[i].country.toUpperCase()}</p>
          <a href="${sources[i].url}" target="_self">${sources[i].url}</a>
        </div>
      </div>
    `;
  }
  panelMain.innerHTML = panel;

 setTimeout(addAnimationToCards, 1000);
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
