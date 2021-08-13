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
Return values
```js
db('foo-table') // returns a promise that resolves to an **array** with all records in the table
db('foo-table').where({ role: 'Student', active: true }) // resolves to an **array** of all records that satisfy the where
db('foo-table').where('name', 'Mary') // is an alternative for when there is just one where condition
db('foo-table').where('id', 7).first() // will resolve to the **record** we want (if the id is unique for a table) or undefined
db('foo-table').insert({ bar: 'baz' }) // resolves to an **array** containing the **ids of the records** inserted into the table
db('foo-table').where('id', id).update({ bar: 'new bar' }) // resolves to the **number of records** affected by the update
db('foo-table').where('id', id).delete() // resolves to the **number of records** affected by the delete
```
