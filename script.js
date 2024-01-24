function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    fetch('/response/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Form submitted successfully:', result);
        // Optionally, update the UI or show a success message.
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        // Handle errors or show an error message.
    });
}
