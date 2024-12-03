const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msgg: 'Get all workouts' });
});

router.get('/:id', (req, res) => {
    res.json({ msgg: 'Get a single workout' });
  });

router.post('/', (req, res) => {
  res.json({ msgg: 'post a new workout~' });
});

router.delete('/:id', (req, res) => {
  res.json({ msgg: 'delete a workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ msgg: 'update a workout' });
});


module.exports = router;