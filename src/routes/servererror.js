const express = require('express');


const router = express.Router();

router.use((req, res) => {
  res.status(500)
    .render('500', {
      title: 'Know More',
    });
});

module.exports = router;
