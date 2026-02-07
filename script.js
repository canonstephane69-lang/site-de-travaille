// script.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form Data:', data);

    // Payment integration logic goes here
    // Example: Send data to payment API
    sendDataToPaymentAPI(data);
}

// Function to send data to payment API
function sendDataToPaymentAPI(data) {
    fetch('https://api.paymentgateway.com/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Payment Result:', result);
        // Handle payment result (success or failure)
    })
    .catch(error => {
        console.error('Payment Error:', error);
    });
}

// Attach event listener to the form
document.querySelector('form').addEventListener('submit', handleFormSubmission);