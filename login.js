let adminLoggedIn = false;


function login() {
    const username = prompt("Enter admin username:");
    const password = prompt("Enter admin password:");

    if (username === "admin" && password === "admin") {
        adminLoggedIn = true;
        showMembers();
    } else {
        alert("Invalid credentials. You are not logged in as an admin.");
    }
}


function removeMember() {
    const memberList = document.getElementById("displayMembers");
    const members = JSON.parse(localStorage.getItem("members")) || [];

    const memberNameToRemove = prompt("Enter the member name to remove:");

    const updatedMembers = members.filter((member) => member.name !== memberNameToRemove);


    localStorage.setItem("members", JSON.stringify(updatedMembers));

    showMembers();
}


function showMembers() {
    const memberList = document.getElementById("displayMembers");
    memberList.innerHTML = "";

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.forEach((member) => {
        const li = document.createElement("li");
        li.textContent = member.name;
        memberList.appendChild(li);
    });


    const removeMemberForm = document.getElementById("removeMemberForm");
    const loginButton = document.getElementById("loginButton");

    if (adminLoggedIn) {
        removeMemberForm.style.display = "block";
        loginButton.style.display = "none";
    } else {
        removeMemberForm.style.display = "none";
        loginButton.style.display = "block";
    }
}


document.addEventListener("DOMContentLoaded", showMembers);


const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", login);