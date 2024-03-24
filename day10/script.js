const weatherContainer = document.getElementById("weather-container");
const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/katmandu?unitGroup=us&include=hours&key=57A5KS9YXZK67DPB5YFULRKG2&contentType=json";

fetch(apiUrl)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data);
    // Access specific data fields and update the HTML content
    weatherContainer.innerHTML = `<h1>${data.resolvedAddress}</h1>`;
      var table = `<table><tr><th>Date</th><th>Conditions</th><th>Description</th><th>Cloud cover</th><th>Dew</th></tr>`;
    data.days.forEach((day) => {
      table += `<tr><td>${day.datetime}</td><td>${day.conditions}</td><td>${day.description}</td><td>${day.cloudcover}</td><td>${day.dew}</td></tr>`;
    });
    table += `</table>`;    // You can access other data fields like data.timezone, data.days, etc. and update the HTML accordingly
    weatherContainer.innerHTML += table;
  })
  .catch(err => {
    // Handle errors
    console.error('Fetch error:', err);
  });

