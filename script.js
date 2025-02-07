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

// Manipulating the DOM . Adding dynamic content (description of Mars)
let infoParagraph = document.createElement("p");
infoParagraph.textContent = "The fourth planet away from the Sun is Mars. The biggest dust storms in the solar system occur there, and its atmosphere is thin.";
document.getElementById("celestial-info").appendChild(infoParagraph);
infoParagraph.style.color = "Red";

// Using Arrow Functions in order to convert light-years to miles
const lightYearsToMiles = (lightYears) => lightYears * 5.878e+12;
console.log(`Distance of Mars in miles (approx): ${lightYearsToMiles(0.0000158)} miles`);

// Error handling using try-catch-finally

try {
    nonExistentFunction(); // This will cause an error
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Error handling complete. Continuing execution.");
}

//  Loop through an array of Mars facts and log them
const marsFacts = [
    "Mars has polar ice caps.",
    "It has two small moons: Phobos and Deimos.",
    "Mars' surface is covered in iron oxide, giving it a red color.",
    "There is evidence of liquid water in the past on Mars."
];

// Using a for loop to log facts
for (let i = 0; i < marsFacts.length; i++) {
    console.log(marsFacts[i]);
}
//  modify loop to dynamically  to create and append a list item <li>
let factsList = document.createElement("ul");

marsFacts.forEach(fact => {
    let listItem = document.createElement("li");
    listItem.textContent = fact;
    factsList.appendChild(listItem);
});

document.getElementById("celestial-info").appendChild(factsList);


