// index.js

const { reserveRoom, cancelReservation, loadReservations } = require('./room');

// Reserve a room (Usage Example)
reserveRoom('Alice', 101, '2024-10-20');
reserveRoom('Bob', 102, '2024-10-21');
reserveRoom('Alice', 101, '2024-10-20'); // Attempt to reserve again (should give an error)

// Cancel a reservation (Usage Example)
cancelReservation(101, '2024-10-20');

// Export reservations
const reservations = loadReservations();
console.log('Current Reservations:', reservations);
