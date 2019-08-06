const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Know More',
  });
});


module.exports = router;
