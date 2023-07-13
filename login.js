document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "username" && password === "1234") {
       document.getElementById("loadingMessage").style.display = "block";
       setTimeout(function() {
     window.location.href = "newsfeed.html";
    },  2000) 
    } else {
        alert("Invalid username or password");
    }
});

