# JONES JOURNAL

**JONES JOURNAL is a web application that allows you to browse and search for news from various sources. Stay updated with the latest news across different categories, countries, and languages.**

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To run this application, you need to have the following software installed on your machine:

Web browser (e.g., Chrome, Firefox, Safari)
Installation
Follow these steps to install and run the application:

Clone the repository to your local machine.
Navigate to the project directory.
Open the index.html file in your web browser.
You should now see the login page of Your News App.
Usage
Login to the application using the following credentials:
Username: username
Password: 1234
javascript
Copy code

<br>

```
// Example login code
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "username" && password === "1234") {
        // Successful login logic
        window.location.href = "newsfeed.html";
    } else {
        // Invalid login logic
        alert("Invalid username or password");
    }
});

// Example search code
document.getElementById("queryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const category = document.getElementById("categoryInput").value;
    const country = document.getElementById("countryInput").value;
    const language = document.getElementById("languageInput").value;

    // Build the query URL
    const queryUrl = createQueryUrl(category, country, language);

    // Fetch news based on the query URL
    fetchNews(queryUrl);
});

// Example code to display news articles
const showNews = (articles) => {
    articles.forEach((article) => {
        // Create and append article card to the DOM
        const card = createArticleCard(article);
        main.appendChild(card);
    });
};

// Example code to open article in a new tab
const openInNewTab = (url) => {
    window.open(url, "_blank");
};

// Example code to scroll to top
document.getElementById("scrollToTopLink").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth" });
});

// Example code to show message for returning to the page
document.getElementById("main").addEventListener("click", function(e) {
    if (e.target.tagName.toLowerCase() === "a") {
        e.preventDefault();

        document.getElementById("return-to-page-message").style.display = "block";
        setTimeout(function() {
            document.getElementById("return-to-page-message").style.display = "none";
        }, 5000); // Display the message for 5 seconds
    }
});

// Example code for logout
document.getElementById("logoutButton").addEventListener("click", function() {
    // Perform logout logic
    window.location.href = "index.html";
});
```
<br>

// Accomplished Stretch Goals

<br>

- Add a button or icon to the error message for incorrectly filled forms, which removes the error when clicked.
- Implement CSS transitions to add effects to the page.
- Store information locally using localStorage to affect what is shown on page reload.

<br>

To logout from the application, click on the "Logout" button in the navigation bar.