function showPreviousMembers() {
    const previousMembersList = document.getElementById("previousMembersList");
    previousMembersList.innerHTML = "";

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.forEach((member) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${member.name}, Employee Number: ${member.number}`;
        previousMembersList.appendChild(li);
    });
}

showPreviousMembers();