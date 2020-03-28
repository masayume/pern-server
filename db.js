const Pool = require("pg").Pool;

const pool = new Pool({ 
    user: "pernuser", 
    password: "P3rnu5a!", 
    host: "localhost", 
    port: 5432, 
    database: "perntodo" 
});

module.exports = pool;