// Funktion för att visa medlemmar
// Funktion för att visa medlemmar
// Function for adding a member with a name and employee number
function addMember() {
    const newMemberNameInput = document.getElementById("newMemberName");
    const newMemberName = newMemberNameInput.value;

    const newMemberNumberInput = document.getElementById("newMemberNumber");
    const newMemberNumber = newMemberNumberInput.value;

    if (newMemberName.trim() !== "" && newMemberNumber.trim() !== "") {
        const members = JSON.parse(localStorage.getItem("members")) || [];
        members.push({ name: newMemberName, number: newMemberNumber }); // Include the employee number
        localStorage.setItem("members", JSON.stringify(members));

        newMemberNameInput.value = ""; // Clear the name input field
        newMemberNumberInput.value = ""; // Clear the number input field

        showMembers(); // Update the displayed members
    } else {
        alert("Both name and employee number are required.");
    }
}

// Funktion för att lägga till medlem
function addMember() {
    const newMemberNameInput = document.getElementById("newMemberName");
    const newMemberName = newMemberNameInput.value;

    if (newMemberName.trim() !== "") {
        const members = JSON.parse(localStorage.getItem("members")) || [];
        members.push({ name: newMemberName });
        localStorage.setItem("members", JSON.stringify(members));

        newMemberNameInput.value = ""; // Clear the input field

        showMembers(); // Update the displayed members
    }
}

// Lägg till medlem när knappen klickas
const addMemberButton = document.getElementById("addMemberButton");
addMemberButton.addEventListener("click", addMember);

// Visa medlemmar och hantera radering när sidan laddas
showMembers();