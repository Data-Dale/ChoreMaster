const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    level: { type: Number, default: 1 },
    points: { type: Number, default: 0 },
    choresCompleted: { type: Number, default: 0 },
    achievements: { type: Array, default: [] }
});

module.exports = mongoose.model('User', userSchema);
