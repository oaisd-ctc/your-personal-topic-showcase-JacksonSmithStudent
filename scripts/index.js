const form = document.getElementById("registration-form");

// Reading data from LocalStorage and populating the table
const storedRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
storedRegistrations.forEach(registration => {
    addToTable(registration);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get all data from the form
    var formData = new FormData(e.target);
    var data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    addToTable(data);

    // Save the registration to local storage
    storedRegistrations.push(data);
    localStorage.setItem('registrations', JSON.stringify(storedRegistrations));

    // Clear the form after submission
    e.target.reset();
});

function addToTable(data) {
    const table = document.getElementById('registration-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Dynamically create the table cells
    Object.values(data).forEach(value => {
        newRow.insertCell().innerText = value;
    });
}

// Advanced exploration (not required unless you finish early):
// Write code to clear the localStorage in your browser so your table will be empty after a reload.
// Hint:
// const clearButton = document.getElementById("clear");
// clearButton.addEventList...