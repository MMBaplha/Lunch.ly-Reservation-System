/** Start server for Lunchly. */
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
