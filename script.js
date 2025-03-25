// Handle guest login
document.getElementById("guestLogin").addEventListener("click", function() {
    alert("Logged in as Guest!");
    window.location.href = "welcome.html";
});

// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve saved credentials from localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        alert("Login Successful!");
        window.location.href = "welcome.html";
    } else {
        alert("Invalid Credentials. Try again.");
    }
});

// Sign-up Form Submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
    } else {
        // Save the username and password to localStorage
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);

        // Simulate a successful sign-up
        alert("Sign-up successful!");
        window.location.href = "index.html"; // Redirect to login page after sign-up
    }
});

// View count logic (for both login and signup pages)
window.addEventListener('load', function() {
    let viewCount = localStorage.getItem('viewCount') || 0;
    viewCount++;
    localStorage.setItem('viewCount', viewCount);
    console.log("Page View Count: " + viewCount); // You can display this anywhere on the page if needed
});
