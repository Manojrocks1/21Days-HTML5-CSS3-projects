// Get all necessary elements once
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const status = document.getElementById("status");
const submitBtn = form.querySelector('button[type="submit"]');

// Email validation function (simple regex)
function isValidEmail(email) {
    // Basic regex for demonstration, can be improved for stricter validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Handle the form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Grab and trim input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Simple validation for empty fields
    if (!name || !email || !message) {
        status.classList.remove("hidden");
        status.textContent = "⚠️ Please fill in all fields.";
        status.style.color = "red";
        hideStatusAfterDelay();
        return;
    }
    // Email format validation
    if (!isValidEmail(email)) {
        status.classList.remove("hidden");
        status.textContent = "⚠️ Please enter a valid email address.";
        status.style.color = "red";
        hideStatusAfterDelay();
        return;
    }

    // Simulate submission: Show success message
    status.classList.remove("hidden");
    status.textContent = "✔️ Message sent successfully!";
    status.style.color = "green";
    status.focus();

    // Optionally, disable the button to prevent multiple submissions
    submitBtn.disabled = true;

    // Reset the form after a short delay
    setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        hideStatusAfterDelay();
    }, 1000);
});

// Hide the status message after a few seconds
function hideStatusAfterDelay() {
    setTimeout(() => {
        status.classList.add("hidden");
        status.textContent = "";
    }, 1000);
}