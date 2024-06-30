document.getElementById('sign-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (e.g., send data to a server or save it locally)
    console.log('Form submitted:', { name, email, message });

    // Clear form
    document.getElementById('sign-form').reset();

    // Display success message
    document.getElementById('success-message').classList.remove('hidden');

    // Hide success message after a few seconds
    setTimeout(() => {
        document.getElementById('success-message').classList.add('hidden');
    }, 3000);
});
