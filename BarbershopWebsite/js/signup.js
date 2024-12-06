document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('signupMessage').textContent = 'Passwords do not match!';
        document.getElementById('signupMessage').style.color = 'red';
    } else {
        document.getElementById('signupMessage').textContent = 'Sign up successful!';
        document.getElementById('signupMessage').style.color = 'green';
    }
});
