list of dependencies to install

```bash
npx gitignore node #create a gitignore for node

npm init -y #create package.json, etc.

npx eslint --init #configure the linting. I am not sure what that does

npm i -D nodemon morgan cross-env sqlite3 supertest jest #dev dependencies

npm i express knex helmet dotenv knex-cleaner #dependencies

npx knex init #creates knexfile.js
```

knexfile.js

```js
// dev environment

module.exports = {

  development: {
    // our DBMS driver
    client: 'sqlite3',
    // the location of our db
    connection: {
      filename: './data/database_file.db3',
    },
    // necessary when using sqlite3
    useNullAsDefault: true,
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
package.json
```json
"scripts": {
    "test": "cross-env NODE_ENV=testing jest --watch --verbose --runInBand",
    "start": "node index.js",
    "server": "nodemon index.js",
    "resetdb": "knex migrate:rollback && knex migrate:latest && knex seed:run",
    "migrate":"knex migrate:latest",
    "rollback":"knex migrate:rollback"
  }
```

index.js
```js
require("dotenv").config();
const server = require("./api/server");

const port = process.env.PORT || "5000";
server.listen(port,()=>console.log(`server is listening at port ${port}`));
```

data-config.js
```js
const knex = require('knex')
const configs = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'

module.exports = knex(configs[environment])
```

migration file

```bash
# making a migration file
knex migrate:make <task name>
```

```js
export.up = function(knex){
    return knex.schema.createTable("table_name",(table)=>{
        //schema building functions
        //
        // some common ones:
        // increments, text, integer, float, boolean, notNullable
        // references('id'), inTable('farms')
        // 
    })
    .createTable("table2_name",(table)=>{
        //createTable are chainable
    })
}
export.down = function(knex){
    return knex.schema.dropTableIfExists("table_name");
}
```

seed files

```bash
# creating seed files
knex seed:make 00-cleanup
knex seed:make 01-<tableName>
```

```js
const express = require("express");

const server = express();
const router = require("path to router");
server.use(express.json());
server.use("/api/<path>",router);
module.exports = server;
```