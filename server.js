const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const lists = require("./rooters/api/lists");

const app = express();
app.use(bodyParser.json());

//----------- connection de base de données-----------------------
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo Connected ..."))
  .catch(err => console.log(err));
//----utilisation des routers-----------
app.use("/api/lists", lists);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
