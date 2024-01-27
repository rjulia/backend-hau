require('dotenv').config();
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const characters = require('./routes/characters');
const express = require('express');
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// if (!config.get('jwtPrivateKey')) {
//   console.error('FATAL ERROR: jwtPrivateKey is not defined.');
//   process.exit(1);
// }

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', users);
app.use('/api/characters', characters);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));