
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config
const port = process.env.PORT
const client = require('./config/connection/connect')

const app  = express();

// declare your routes 
app.post("/collections/all", bodyParser.json(), client.createCollections);
app.get("/collections/:id", client.getCollectionsById);
app.delete("/collections/:id", client.deleteCollectionsById);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.set("port", process.env.PORT || 4000);


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

