const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Access app by http://localhost:${app.get('port')}`);
});
