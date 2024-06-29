/*
    <div id="expense-tracker-container">
      <div id="add-btn-div">
        <button id="add">Add</button>
      </div>
      <div id="log-div"></div>
      <div id="report-div"></div>
      <div id="popup-div"></div>
    </div>
*/ 

// Get references to DOM elements
const logDiv = document.getElementById('log-div');
const popupDiv = document.getElementById('popup-div');
const blur = document.getElementById('blur');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const entrySelect = document.getElementById('entry-select');
const date = document.getElementById('date');
const time = document.getElementById('time');
const remark = document.getElementById('remark');

// Initialize data
const now = new Date();
const data = [
  //{ date: now.toLocaleDateString(), time: now.toLocaleTimeString(), description: 'eat momo', entry: 'credit', amount: "150", remark: 'cash' },
  //{ date: now.toLocaleDateString(), time: now.toLocaleTimeString(), description: 'game', entry: 'credit', amount: "100", remark: 'bank' }
];

// Function to display the data in a table
function showTable() {
  logDiv.innerHTML = ""; // Clear previous content
  let text = `<table><tr><th>Date</th><th>Time</th><th>Description</th><th>Entry</th><th>Amount</th><th>Rmarks</th><th>Operation</th></tr>`;
  data.forEach((object, index) => {
    text += `<tr><td>${object.date}</td><td>${object.time}</td><td>${object.description}</td><td>${object.entry}</td><td>${object.amount}</td><td>${object.remark}</td><td><button id="delete-${index}" onclick="deleteRow(${index})">Delete</button><button id="modify-${index}" onclick="modify(${index})">Modify</button></td></tr>`;
  });
  text += `</table>`;
  logDiv.innerHTML = text;
}

// Initial display of data
showTable();

// Function to add a new entry
function addNew() {
  const now = new Date();
  const currentDate = now.toISOString().slice(0, 10);
  const currentTime = now.toTimeString().slice(0, 5);
  date.value = currentDate;
  time.value = currentTime;
  popupDiv.style.display = 'block';
  blur.style.display = 'block';
}

// Function to cancel adding or modifying
function cancel() {
  popupDiv.style.display = 'none';
  blur.style.display = 'none';
}

// Function to add a new entry to the data array
function add() {
  const newData = { date: date.value, time: time.value, description: description.value, entry: entrySelect.value, amount: amount.value, remark: remark.value };
  data.unshift(newData); // Add new entry to the beginning of the array
  cancel(); // Hide the popup
  showTable(); // Update the table display
}

// Function to delete a row from the data array
function deleteRow(index) {
  console.log("Deleted entry with index: " + index);
  data.splice(index, 1); // Remove the entry at the specified index
  showTable(); // Update the table display
}

// Function to modify an existing entry
function modify(index) {
  const entry = data[index];
  description.value = entry.description;
  amount.value = entry.amount;
  entrySelect.value = entry.entry;
function formatDate(dateString) {
  // console.log(dataString);
    // Assuming dateString is in a format like "YYYY-MM-DD"
    const parts = dateString.split('-'); // Split the date string into parts
    //const formattedDate = `${parts[0]}/${parts[1]}/${parts[2]}`; // Format as "MM/DD/YYYY"
    const formattedDate = `${parts[1]}/${parts[2]}/${parts[0]}`; // Format as "MM/DD/YYYY"
    return formattedDate;
}

// Define the formatTime function to format the time string
function formatTime(timeString) {
    // Assuming timeString is in a format like "HH:MM"
    const parts = timeString.split(':'); // Split the time string into parts
    const formattedTime = `${parts[0]}:${parts[1]}`; // Format as "HH:MM"
    return formattedTime;
}

// Now you can use these functions to format and assign values to input fields
const formattedDate = formatDate(entry.date); // Format the date as needed
const formattedTime = formatTime(entry.time); // Format the time as needed

// Assign the formatted date and time to the input fields
date.value = formattedDate;
time.value = formattedTime;
  remark.value = entry.remark;
  const addButton = document.getElementById('add');
  addButton.innerText = "Update";
  addButton.addEventListener('click', function () {
    update(index);
  });
  popupDiv.style.display = 'block';
  blur.style.display = 'block';
}

// Function to update an existing entry
function update(index) {
  const updatedData = { date: date.value, time: time.value, description: description.value, entry: entrySelect.value, amount: amount.value, remark: remark.value };
  data[index] = updatedData; // Update the data at the specified index
  cancel(); // Hide the popup
  showTable(); // Update the table display
}

