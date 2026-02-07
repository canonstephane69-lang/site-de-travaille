// script.js

// Functionality for the booking system
function bookAppointment(date, time) {
    // Booking logic
    console.log(`Booking appointment on ${date} at ${time}`);
}

// Functionality for the calendar
class Calendar {
    constructor() {
        this.events = [];
    }

    addEvent(date, eventDetails) {
        this.events.push({ date, eventDetails });
        console.log(`Event added on ${date}: ${eventDetails}`);
    }
}

const calendar = new Calendar();

// Functionality for payment integration
function processPayment(amount) {
    // Payment logic
    console.log(`Processing payment of $${amount}`);
}

// Sample usage
bookAppointment('2026-02-07', '10:00 AM');
calendar.addEvent('2026-02-07', 'Doctor Appointment');
processPayment(50);
