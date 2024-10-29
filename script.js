// script.js

// Function to toggle active class on clicked button
document.querySelectorAll(".options").forEach(optionGroup => {
    optionGroup.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            // Remove 'active' class from all buttons in this option group
            optionGroup.querySelectorAll("button").forEach(button => {
                button.classList.remove("active");
            });
            // Add 'active' class to the clicked button
            event.target.classList.add("active");
        }
    });
});
