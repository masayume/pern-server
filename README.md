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

// middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has been started on port 5000")
})

node index
nodemon index

## postgres

\l    list all database in postgresql
\c    move inside the database
\dt   show table in the database

CREATE DATABASE perntodo;
CREATE TABLE todo(...)

### file: database.sql

