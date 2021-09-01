Model the relationship for addresses where:

an address has the street address, the city, state and zip code.
a state can have several cities.
a city belongs to only one state.

address
street address, city, state, zip code

state

street address -> city (one to many) (foreign keys in street address)

city -> state (one to many) (foreign keys in city)

street address -> zip code (one to many) (foreign keys in street address)

city -> zip code (many to many) (intermediary table)


Enforcing foreign keys in js

```js
development: {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/database.db3',
  },
  // needed when using foreign keys
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
},
```


