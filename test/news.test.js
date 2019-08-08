const test = require('tape');

const supertest = require('supertest');

const app = require('../src/app');

test('test success search', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err, 'should not return err');
      const isInclude = res.text.includes('Know More');
      t.equals(isInclude, true, 'the bage should be Know More');
      t.end();
    });
});

test('test for search', (t) => {
  supertest(app)
    .post('/search')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err, 'error with headers');
      t.end();
    });
});
