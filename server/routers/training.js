const express = require('express');
const { Pet } = require('../db');

const router = express.Router();

// GET all skill data for the pet belonging to the current user
router.get('/', (req, res) => {
  const userId = req.session.passport?.user?.id;

  if (userId === undefined) {
    res.sendStatus(401);
    return;
  }

  return Pet.find({ userId })
    .then((pets) => {
      if (!pets.length) {
        res.sendStatus(404);
        return;
      }
      res.status(200).send(pets[0].training);
    })
    .catch((err) => {
      console.error('Failed to retrieve pet data:', err);
      res.sendStatus(500);
    });
});

// GET data for the specified skill for the pet belonging to the current user
router.get('/:id', (req, res) => {
  const userId = req.session.passport?.user?.id;

  if (userId === undefined) {
    res.sendStatus(401);
    return;
  }

  const skillId = req.params.id;
  res.send('get id');
});

// PATCH data to update the specified skill by the delta amount for the pet belonging to the current user
router.patch('/:id', (req, res)=> {
  const userId = req.session.passport?.user?.id;

  if (userId === undefined) {
    res.sendStatus(401);
    return;
  }

  const skillId = req.params.id;

  const skillDelta = req.body.delta;

  Pet.findOne({userId})
    .then((pet) => {
      if (!pet) {
        res.sendStatus(404);
        return;
      }

      // find the correct skill in the pet's training array
      const matchingSkills = pet.training.filter((skill) => skill._id === skillId);
      if (!matchingSkills.length) {
        res.sendStatus(404);
        return;
      }

      // get the current stat for this skill and add the delta from the request body
      const newStat = matchingSkills[0].stat + skillDelta;
      console.log(newStat);

      // update the skill
      
      console.log(pet);
      res.send('patch id');
    })
    .catch((error) => {
      console.error('Failed to find pet:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
