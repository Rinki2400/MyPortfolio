const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 

connectDB();

// Correct Route Mount 🔥
app.use('/api/auth', require('./routes/authController'));
app.use('/api/projects', require('./routes/projects'));

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
