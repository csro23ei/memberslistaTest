function showPreviousMembers() {
    const previousMembersList = document.getElementById("previousMembersList");
    previousMembersList.innerHTML = "";

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.forEach((member) => {
        const li = document.createElement("li");
        li.textContent = member.name;
        previousMembersList.appendChild(li);
    });
}


showPreviousMembers();