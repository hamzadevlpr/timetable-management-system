const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true,
    },
    floor: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
