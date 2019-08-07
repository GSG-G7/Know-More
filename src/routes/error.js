exports.client = (req, res) => {
  res.status(404)
    .render('404', {
      title: 'Know More',
    });
};

exports.server = (req, res) => {
  res.status(500)
    .render('500', {
      title: 'Know More',
    });
};
