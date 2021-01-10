// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/api/test", (req, res) => {
//   res.json("/api/test route Hello World!");
// });

// app.listen("5000", () => {
//   console.log("...listening on port 5000");
// });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/test", (req, res) => {
  res.json("/api/test route Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
