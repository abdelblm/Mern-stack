const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msgg: 'Get all workouts' });
});

router.post('/', (req, res) => {
  res.json({ msgg: 'post a new workouts' });
});

router.('/', (req, res) => {
  res.json({ msgg: ' all workouts' });
});

router.get('/', (req, res) => {
  res.json({ msgg: 'Get all workouts' });
});

router.get('/', (req, res) => {
  res.json({ msgg: 'Get all workouts' });
});

module.exports = router;