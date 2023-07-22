const API_KEY = "735d3091c04e4afeb2b5e4ec0cde4810";
const panelMain = document.querySelector(".panel-container");

const getApiUrl = () => {
  const category = document.getElementById("categoryInput").value;
  const country = document.getElementById("countryInput").value;
  const language = document.getElementById("languageInput").value;

  let apiUrl = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
  if (category) apiUrl += `&category=${category}`;
  if (country) apiUrl += `&country=${country}`;
  if (language) apiUrl += `&language=${language}`;

  return apiUrl;
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
  fetchNews(getApiUrl());
});

document.getElementById("queryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const apiUrl = getApiUrl();
  const affiliate = document.getElementById("nameInput").value.toLowerCase();
  
  fetchNews(apiUrl, affiliate);
});

const fetchNews = (url, affiliateName) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === 'ok') {
        let sources = data.sources;
        if (affiliateName) {
          sources = sources.filter(source => source.name.toLowerCase().includes(affiliateName));
        }
        showNews(sources);
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
      <div class="card-stack" style="animation-delay: ${i * 0.2}s;">
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

const addAnimationToCards = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.animation = `fadeAway ${cards.length * 2}s infinite ${index * 2}s`;
  });
};

const showError = (err) => {
  panelMain.innerHTML = `
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
