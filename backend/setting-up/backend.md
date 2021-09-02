list of dependencies to install

```bash
npx gitignore node #create a gitignore for node

npm init -y #create package.json, etc.

npx eslint --init #configure the linting. I am not sure what that does

npm i -D nodemon morgan cross-env sqlite3 supertest jest #dev dependencies

npm i express knex helmet dotenv knex-cleaner express-session connect-session-knex bcriptjs client-sessions

# connection-session-knex allows you to save cookie in database
# bcriptjs encript and hash passwords
#dependencies

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

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})
module.exports = server;
```

authRouter.js

```js
const router = require("express").Router();
const userModel = require("../users/users-model");
const bcryptjs = require("bcryptjs"); //bcript do the salting
const checkPayloadShape=(req,res,next)=>{
    if(!req.body.username || !req.body.password){
        res.status(401).json({message:"username and password required"});
    }
    else{
        next();
    }
};
const userMustNotExist=async(req,res,next)=>{
    const users = await userModel.findBy({username:req.body.username});
    if(users.length !== 0){
        res.status(400).json({message:"user already exists"});
    }
    else{
        next();
    }
};
const userMustExist=async(req,res,next)=>{
    const users = await userModel.findBy({username:req.body.username});
    if(users.length === 0){
        res.status(404).json({message:"user not found"});
    }
    else{
        req.user = users[0];
        next();
    }
};
router.post("/register",checkPayloadShape,userMustNotExist,async(req,res,next)=>{
    try{
        req.body.password = bcryptjs.hashSync(req.body.password, 14); //run 2^14 times
        const {username,password} = req.body;
        const user = await userModel.add({username,password});
        res.status(201).json(user);
    }
    catch(err){
        next(err);
    }

});

router.post("/login",checkPayloadShape,userMustExist,(req,res,next)=>{
    try{
        if(bcryptjs.compareSync(req.body.password, req.user.password)){
            req.session.user = req.user;
            res.status(200).json({message:"login successful"});
        }
        else{
            res.status(403).json({message: "invalid credentials"});
        }
    }
    catch(err){
        next(err);
    }
});
router.get("/logout",(req,res,next)=>{
    if(req.session){
        req.session.destroy(err=>{
            if(err){
                res.json("cant log out");
            }
            else{
                res.json("you are logged out");
            }
        })
    }
    else{
        res.json("no session found");
    }
});


module.exports = router;
```
bcryptjs and express session setup on server

```js
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const config = {
  name:"sessionId",
  secret: "keep it secret, keep it safe",
  cookie:{
    maxAge: 1000 * 60 * 60,
    secure:false,
    httpOnly: true
  },
  resave:false,
  saveUninitialized:false,
  store: new KnexSessionStore({
    knex:require("../database/db-config.js"),
    tablename:"sessions",
    sidfieldname:"sid",
    createTable:true,
    clearInterval:1000 * 60 * 60
  })
}

server.use(session(config));
```