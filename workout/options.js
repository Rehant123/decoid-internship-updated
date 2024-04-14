document.addEventListener('DOMContentLoaded', function() {
    // Get the button by ID
    const skipButton = document.getElementById('skip-button');

    // Add a click event listener to the button
    skipButton.addEventListener('click', function() {
        // Redirect to tracker.html
        window.location.href = 'tracker.html';
    });

    // If you have other JavaScript logic, place it here
});