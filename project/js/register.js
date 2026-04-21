document.getElementById("registerForm").addEventListener("submit", function(event) {
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore the current time, only compare dates
    
    let dobValue = document.getElementById("dob").value;
    let password = document.querySelector('input[name="password"]').value;
    
    let errorMessage = "";
    
    // Password Check
    if (password.length < 8) {
        errorMessage += "Password must be at least 8 characters long.<br>";
    }
    
    // DOB Check
    if (dobValue) {
        let dob = new Date(dobValue);
        if (dob > today) {
            errorMessage += "Invalid Date of Birth!<br>";
        }
    } else {
        errorMessage += "Please enter your Date of Birth.<br>";
    }
    
    if (errorMessage !== "") {
        event.preventDefault(); // Stop the form from submitting
        document.getElementById("error").innerHTML = errorMessage;
    } else {
        document.getElementById("error").innerHTML = ""; // Clear errors if valid
    }
});
