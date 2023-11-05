function showMembers() {
    const memberList = document.getElementById("displayMembers");
    memberList.innerHTML = ""; // Clear the list before displaying names

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.forEach((member) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${member.name}, Employee Number: ${member.number}`;
        memberList.appendChild(li);
    });

    // Display the remove member form only if admin is logged in
    const removeMemberForm = document.getElementById("removeMemberForm");
    if (adminLoggedIn) {
        removeMemberForm.style.display = "block";
        const removeMemberButton = document.getElementById("removeMemberButton");
        removeMemberButton.addEventListener("click", removeMember);
    } else {
        removeMemberForm.style;
        display = "none";
    }
}