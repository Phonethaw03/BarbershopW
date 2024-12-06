document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Simulated login logic
    if (email === 'user@example.com' && password === 'password123') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.className = 'alert alert-success';
    } else {
        loginMessage.textContent = 'Invalid email or password';
        loginMessage.className = 'alert alert-danger';
    }
});
