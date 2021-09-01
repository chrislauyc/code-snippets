
```bash
#install both the knex and sqlite3 library
npm install knex sqlite3
#create knexfile.js (if globally installed)
knex init

#(if not globally installed)
npx knex init  # <== just use this

#Generate a new migration (named migration)
knex migrate:make [migration-name]

#create tables
knex migrate:latest

#if schema need to be updated, don't modify the original migration file

#make a new migration file instead

knex migrate:make accounts-schema-update

#rollback the last migration if the latest migration file has to be changed

knex migrate:rollback

#NOTE: A rollback should not be used to edit an old migration file once that file has accepted into a main branch. However, an entire team may use a rollback to return to a previous version of a database.

#Create seed. Numbering can control the order of the files being run
knex seed:make 001-seedName

#running a seed
knex seed:run

#create a seed file for knex-cleanup
knex seed:make 00-cleanup


```
00-cleanup should look like this

```js
//This removes all tables (excluding the two tables that track migrations) in the correct order before any seed files run.

//01-farms, 02-ranchers

//there is a problem with truncate 02-ranchers before 01-farms

const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
};

```
cascading when deleting a record

```js
//deleting a record will also delete all referencing records
// by default, if deleting ranchers record, the database will block it
.createTable('ranchers', tbl => {
    tbl.increments();
    tbl.string('rancher_name', 128);
    tbl.integer('farm_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('farms')
    .onUpdate('CASCADE');
    .onDelete('CASCADE')
})
```

The file content of knexfile.js will look like this:
```js
module.exports = {

  development: {
    // our DBMS driver
    client: 'sqlite3',
    // the location of our db
    connection: {
      filename: './data/database_file.db3',
    },
    // necessary when using sqlite3
    useNullAsDefault: true
  }
    // generates migration files in a data/migrations/ folder
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // needed when using foreign keys
    pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
};
```

To include the config into other code

```js
const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

// export for use in codebase
module.exports = db;
```


Setting up migration file

```js
//up: for running the migration
exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema.createTable('accounts', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl.text('name', 128).unique().notNullable();
    // creates a numeric field called budget which is required
    tbl.decimal('budget').notNullable();
  });
};
//down: for rollback
exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema.dropTableIfExists('accounts');
};
```

Another example of the migraiton file

This includes a foregin key, with a one-to-many relationship

```js

//foreign key can only be created after the reference table.

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('farms', tbl => {
      tbl.increments();
      tbl.string('farm_name', 128)
        .notNullable();
    })
    // we can chain together createTable
    .createTable('ranchers', tbl => {
      tbl.increments();
      tbl.string('rancher_name', 128);
      tbl.integer('farm_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('farms')
    })
};

// in the down funciton, the table with the foreign keys have to be dropped first

exports.down = function(knex, Promise) {
  // drop in the opposite order
  return knex.schema
    .dropTableIfExists('ranchers')
    .dropTableIfExists('farms')
};

```

Seed file should look like this

```js
exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('accounts').truncate()
    .then(function () {
      // add data into insert
      return knex('accounts').insert([
        { name: 'Stephenson', budget: 10000 },
        { name: 'Gordon & Gale', budget: 40400 },
      ]);
    });
};
```
This is with a many-to-many relationship

```js
.createTable('farm_animals', tbl => {
  tbl.integer('farm_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist already
    .inTable('farms')
  tbl.integer('animal_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist already
    .inTable('animals')

  // the combination of the two keys becomes our primary key
  // will enforce unique combinations of ids
  tbl.primary(['farm_id', 'animal_id']);
});
```


Join in Knex
```js
db('employees as e')
  .join('departments as d', 'e.department_id', 'd.id')
  .select('d.id', 'd.name', 'e.first_name', 'e.last_name', 'e.salary')
```