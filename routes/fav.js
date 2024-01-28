const express = require('express');
const router = express.Router();
const {User} = require('../models/user')
const _ = require('lodash');

router.post('/', async (req, res) => {
  const { userId, characterIds } = req.body;
  
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { favorites:  _.uniq(characterIds)  } }, 
      { new: true }
    ).populate('favorites'); 

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }


    res.status(200).json({
      message: 'Favorites added successfully',
      favorites: updatedUser.favorites
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});

module.exports = router;


  