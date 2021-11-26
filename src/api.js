const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const router = require('./routes');

const app = express();

app.use(express.json());

app.use(router);


mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(process.env.PORT, () => {
      console.log(`server is running on ${process.env.PORT}`);
    });
  })
  .catch((e) => console.error(`failed to connect to the database. Error ${e}`));