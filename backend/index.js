const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config Routes
app.use('/api/config', require('./server/routes/configRoutes'));
app.use('/api/config', require('./server/routes/configRoutes'));
app.use('/api/careers', require('./server/routes/careerRoutes'));
app.use('/api/contact', require('./server/routes/contactRoutes'));
app.use('/api/admin', require('./server/routes/adminRoutes'));

// Root Healthcheck Route
app.get('/', (req, res) => {
  res.send('WOTO Safety API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});