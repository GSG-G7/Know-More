const express = require('express');
const request = require('./request');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Know More',
  });
});

router.post('/search', request.fetchData);


module.exports = router;
