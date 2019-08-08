const express = require('express');


const router = express.Router();

router.use((err, req, res, next) => {
  res.status(500)
    .render('500', {
      title: 'Know More',
    });
});

module.exports = router;
