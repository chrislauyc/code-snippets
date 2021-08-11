In db-config.js

```js
const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/posts.db3',
  },
  useNullAsDefault: true,
};

module.exports = knex(config);
```

Select

```js
//SELECT * FROM users
db.select('*').from('users');
//same thing
db('users');

//using the knex object
router.get('/api/users', (req, res) => {
  db('users')//returns a promise
  .then(users => {
    res.json(users);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});
```
Where

```js
db('users').where({ id: 1 });
```
