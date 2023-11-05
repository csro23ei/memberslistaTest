// Funktion för att visa medlemmar
function showMembers() {
    const memberList = document.getElementById("displayMembers"); // Change the target element to "displayMembers"
    memberList.innerHTML = "";

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.forEach((member) => {
        const li = document.createElement("li");
        li.textContent = member.name;
        memberList.appendChild(li);
    });

    // Visa radera-medlem-formuläret endast om admin är inloggad
    const removeMemberForm = document.getElementById("removeMemberForm");
    removeMemberForm.style.display = adminLoggedIn ? "block" : "none";
}

// Visa medlemmar och hantera radering när sidan laddas
showMembers();