// // Database connection setup for lunchly

// const express = require("express");
// const { Client } = require("pg");

// const client = new Client({
//     user: "mb34",
//     host: "localhost", 
//     database: "lunchly",
//     password: "3473Heats@", 
//     port: 5432, 
// });

// client.connect()
//     .then(() => console.log("Connected to the database"))
//     .catch(err => console.error("Database connection error", err.stack));
/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql:///lunchly");

db.connect();

module.exports = db;