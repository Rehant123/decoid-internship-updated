document.addEventListener('DOMContentLoaded', function() {

    const loginBtn = document.querySelector('.login-btn');

   
    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // Add your login logic here
        window.location.href = "login.html";
    });
});