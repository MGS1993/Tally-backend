const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const port = process.env.PORT || 9000;

app.listen(port, console.log(`running on port ${port}`));
