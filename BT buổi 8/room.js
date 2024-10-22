// room.js

const fs = require('fs');
const path = require('path');

const reservationsPath = path.join(__dirname, 'reservations.json');

// Load reservations from JSON file
const loadReservations = () => {
    try {
        const dataBuffer = fs.readFileSync(reservationsPath);
        return JSON.parse(dataBuffer.toString());
    } catch (error) {
        return []; // If file doesn't exist or is empty
    }
};

// Save reservations to JSON file
const saveReservations = (reservations) => {
    const dataJSON = JSON.stringify(reservations, null, 2);
    fs.writeFileSync(reservationsPath, dataJSON);
};

// Reserve a room
const reserveRoom = (name, roomNumber, date) => {
    const reservations = loadReservations();
    const duplicate = reservations.find((r) => r.roomNumber === roomNumber && r.date === date);

    if (!duplicate) {
        reservations.push({ name, roomNumber, date });
        saveReservations(reservations);
        console.log(`Room ${roomNumber} reserved for ${name} on ${date}.`);
    } else {
        console.log(`Room ${roomNumber} is already reserved on ${date}.`);
    }
};

// Cancel a reservation
const cancelReservation = (roomNumber, date) => {
    const reservations = loadReservations();
    const updatedReservations = reservations.filter((r) => !(r.roomNumber === roomNumber && r.date === date));

    if (updatedReservations.length === reservations.length) {
        console.log(`No reservation found for Room ${roomNumber} on ${date}.`);
    } else {
        saveReservations(updatedReservations);
        console.log(`Reservation for Room ${roomNumber} on ${date} has been canceled.`);
    }
};

// Exporting functions
module.exports = {
    reserveRoom,
    cancelReservation,
    loadReservations
};
