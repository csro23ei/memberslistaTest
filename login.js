// Check if admin is logged in (Initially, not logged in)
let adminLoggedIn = false;

// Function to handle login
function login() {
    const username = prompt("Enter admin username:");
    const password = prompt("Enter admin password:");

    // Check if the provided username and password are correct (you should implement actual authentication)
    if (username === "admin" && password === "admin") {
        adminLoggedIn = true;
        showMembers();
    } else {
        alert("Invalid credentials. You are not logged in as an admin.");
    }
}

// Function for removing a member
function removeMember() {
    const memberList = document.getElementById("displayMembers");
    const members = JSON.parse(localStorage.getItem("members")) || [];

    // Get the member name to remove (you can implement a form for this)
    const memberNameToRemove = prompt("Enter the member name to remove:");

    // Find and remove the member from the list
    const updatedMembers = members.filter((member) => member.name !== memberNameToRemove);

    // Update the local storage with the updated member list
    localStorage.setItem("members", JSON.stringify(updatedMembers));

    showMembers(); // Update the displayed members
}

// Function for showing members and handling removal (if admin is logged in)
function showMembers() {
    const memberList = document.getElementById("displayMembers");
    memberList.innerHTML = ""; // Clear the list before displaying names

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.forEach((member) => {
        const li = document.createElement("li");
        li.textContent = member.name;
        memberList.appendChild(li);
    });

    // Display the remove member form and the login button based on the login status
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

// Add an event listener for showing members and handling removal when the page loads
document.addEventListener("DOMContentLoaded", showMembers);

// Add an event listener to the login button
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", login);