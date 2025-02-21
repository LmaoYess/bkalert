document.getElementById("guestLogin").addEventListener("click", function() {
    alert("Logged in as Guest!");
    window.location.href = "welcome.html";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "welcome.html";
    } else {
        alert("Invalid Credentials. Try again.");
    }
});
function submitFeedback() {
    let feedbackText = document.getElementById("feedbackText").value;
    fetch("https://script.google.com/macros/s/AKfycbxNO8IdFReyDx9O9UgAPLT_mmCh3lzPkE33BZS9z8LMGoyb5c7rzq4BmDiGLzAbTSkeSA/exec", {
        method: "POST",
        body: JSON.stringify({ message: feedbackText }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => alert("Feedback sent!"))
    .catch(error => alert("Error sending feedback."));
}

