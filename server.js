const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const PORT = config.port;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/chores', require('./routes/choreRoutes'));
app.use('/api/quests', require('./routes/questRoutes'));
app.use('/api/rewards', require('./routes/rewardRoutes'));

// Database connection
mongoose.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
