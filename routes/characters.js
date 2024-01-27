const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character/');  
    res.send(data);
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).send('The characters were not found.');
    }
    console.error(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`);  
    res.send(data);
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).send('The character with the given ID was not found.');
    }
    console.error(error);
  }
});


module.exports = router;
