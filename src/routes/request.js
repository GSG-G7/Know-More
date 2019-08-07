const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;

exports.fetchData = (req, res) => {
    // console.log(req.body);
    const search = req.body.query;
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            res.render('home', {
                title: 'Know More',
                result: data.articles,
            });
        })
        .catch(err => console.log(err));
};