const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  // if user is signed in - we check the session to see if the passport exist
  const { passport } = req.session;
  if(passport) {
    // find the pet with the same userId
    db.Pet.find({userId: passport.user.id})
      .then((pet) => {
        res.status(200).send(pet);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    res.redirect('/login'); // review and check endpoint later
  }

});

module.exports = router;
