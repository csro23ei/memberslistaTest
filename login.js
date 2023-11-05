const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {

        localStorage.setItem("adminLoggedIn", "true");

        window.location.href = "members.html";
    } else {
        alert("Fel användarnamn eller lösenord.");
    }
});