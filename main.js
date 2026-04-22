const CORRECT_USERNAME = "ruby";
const CORRECT_PASSWORD = "12345";
let attempts = 0;
const MAX_ATTEMPTS = 3;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {
        alert("Access granted\nWelcome " + usernameInput);
        attempts = 0; // Reset attempts
    } else {
        attempts++;
        
        if (attempts >= MAX_ATTEMPTS) {
            alert("Account Locked. Too many failed attempts.");
            document.querySelector('button[type="submit"]').disabled = true;
        } else {
            alert("Access denied\nIncorrect username and/or password.\nAttempts Left: " + (MAX_ATTEMPTS - attempts));
        }
    }
});