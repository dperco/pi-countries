const { Countries, conn, Tourisms} = require('../../src/db.js');
const { expect } = require('chai');

describe('Countries model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Countries.sync({ force: false }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Countries.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Countries.create({ name: 'Argentina' });
      });
    });
  });
});

describe('Tourisms model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Tourisms.sync({ force: false }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Tourisms.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Tourisms.create({ name: 'Golf' });
      });
    });
  });
});