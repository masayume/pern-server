# pern-server
PERN server

# PERN
- postgres
- express
- react
- node

# tutorial
[main tutorial](https://www.youtube.com/watch?v=ldYcgPKEZC8)

## NPM
npm init (package name: server, entry point index.js)

npm i express pg cors

### file index.js
touch index.js

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// create a todo

// get all todo

// update a todo

// delete a todo

app.listen(5000, () => {
  console.log("server has been started on port 5000")
})

node index
nodemon index

## postgres

\l                  list all database in postgresql
\c <databasename>   move inside the database
\dt                 show table in the database


### file: database.sql
CREATE DATABASE perntodo;
CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

psql -U postgres

### file db.js
const Pool = require("pg").Pool;

const pool = new pool({
  user "postgres",
  password: "kth18822",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
