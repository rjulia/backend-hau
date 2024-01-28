require('dotenv').config();
const mongoose = require('mongoose');
const cors = require("cors") 
const express = require('express');
const auth = require('./middleware/auth');
const users = require('./routes/users');
const characters = require('./routes/characters');
const fav = require('./routes/fav');

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST"],
}))



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', users);
app.use('/api/characters', characters);
app.use('/api/fav',auth, fav);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})