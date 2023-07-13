const errorMessage = document.createElement("div");
errorMessage.classList.add("error-message");
errorMessage.classList.add("show");
errorMessage.textContent = "Invalid username or password";

const closeButton = document.createElement("button");
closeButton.classList.add("close-button");
closeButton.textContent = "X";
errorMessage.appendChild(closeButton);

closeButton.addEventListener("click", function() {
    errorMessage.remove();
});

document.getElementById("loginForm").appendChild(errorMessage);