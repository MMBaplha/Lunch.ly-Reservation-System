/** Start server for Lunchly. */
const express = require("express");
const app = express();

const routes = require("./routes");

// Middleware to parse JSON
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
