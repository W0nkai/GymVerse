document.getElementById("loginForm").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    
    // Simple password checker for login
    if (password.length < 8) {
        event.preventDefault(); // Stop the form from submitting
        document.getElementById("error").innerHTML = "Incorrect Password! (Must be at least 8 characters)";
    } else {
        document.getElementById("error").innerHTML = ""; // Clear errors if valid
    }
});
