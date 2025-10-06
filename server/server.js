require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const appointmentsRouter = require('./routes/appointments');

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON body

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api/appointments', appointmentsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
