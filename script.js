const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
// Get the button and output elements
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// Define the async function that takes a callback function as a parameter
async function fetchData(callback) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    callback(data.title);
  } catch (error) {
    console.log(error);
  }
}

// Define the callback function that updates the output element with the title
function displayTitle(title) {
  output.innerHTML = title;
}

// Add a click event listener to the button
btn.addEventListener('click', () => {
  fetchData(displayTitle);
});
