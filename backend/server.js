const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const heroRoutes = require('./routes/heroRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const skillRoutes = require('./routes/skillRoutes');
const experienceRoutes = require('./routes/expRoutes');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());   

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));    

// Routes
app.use('/api/hero', heroRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/exp', experienceRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/contact', contactRoutes);

// Start the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});