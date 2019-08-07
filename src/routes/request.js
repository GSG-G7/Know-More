const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;

exports.fetchData = (req, res) => {
  // console.log(req.body.query);
  const search = req.body.name;
  const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => console.log(err));
};
