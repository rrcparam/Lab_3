//  Declaring the  variables using different methods

const celestialName = "Mars"; // The celestial body's name (constant)
let celestialType = "Planet"; // Type of celestial body that can be changed
var discoveryYear = "Known since ancient times"; // when it  discovered

// Writing Functions Developing a function called populateHeader.

function populateHeader() {
    document.getElementById("celestial-name").textContent = celestialName; // Get the calestial-name element
}

// Adding Event listener for the "Reveal Space Fact" button
const spaceFact = "Mars may look warm but it's very cold.";

document.getElementById("reveal-fact").addEventListener("click", function() {
    let factElement = document.getElementById("space-fact");
    factElement.textContent = spaceFact;
    factElement.style.display = "block"; // Make it visible and better
});
