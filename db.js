// const { Client } = require("pg");

// let DB_URI;

// if(process.env.NODE_ENV === "test"){
//     DB_URI = "lunchly_test";
// } else {
//     DB_URI = "lunchly";
// }

// const db = new Client({
//   user: "mb34",
//   password: "7334Heats@",  
//   host: "localhost",
//   port: 5432,
//   database: DB_URI // return to "lunchly" if needed
// });

// db.connect()
//   .then(() => console.log("Connected to the database"))
//   .catch(err => console.error("Database connection error", err.stack));

// module.exports = db;

const { Client } = require("pg");

let DB_URI;

if(process.env.NODE_ENV === "test"){
    DB_URI = "lunchly_test";
} else {
    DB_URI = "lunchly";
}

const db = new Client({
    host :"/var/run/postgresql",
    database: DB_URI 
});

db.connect();

module.exports = db;
