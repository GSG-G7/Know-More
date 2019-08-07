const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Know More',
  });
});

router.post('/search', (req, res) => {
  res.json({ nnn: 'ddd' });
});


module.exports = router;
