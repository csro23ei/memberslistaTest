function addMember() {
    const newMemberNameInput = document.getElementById("newMemberName");
    const newMemberName = newMemberNameInput.value;

    const newMemberNumberInput = document.getElementById("newMemberNumber");
    const newMemberNumber = newMemberNumberInput.value;

    if (newMemberName.trim() !== "" && newMemberNumber.trim() !== "") {
        const members = JSON.parse(localStorage.getItem("members")) || [];
        members.push({ name: newMemberName, number: newMemberNumber });
        localStorage.setItem("members", JSON.stringify(members));

        newMemberNameInput.value = "";


        showMembers();
    } else {
        alert("Both name and employee number are required.");
    }
}


function addMember() {
    const newMemberNameInput = document.getElementById("newMemberName");
    const newMemberName = newMemberNameInput.value;

    if (newMemberName.trim() !== "") {
        const members = JSON.parse(localStorage.getItem("members")) || [];
        members.push({ name: newMemberName });
        localStorage.setItem("members", JSON.stringify(members));

        newMemberNameInput.value = "";

        showMembers();
    }
}


const addMemberButton = document.getElementById("addMemberButton");
addMemberButton.addEventListener("click", addMember);


showMembers();