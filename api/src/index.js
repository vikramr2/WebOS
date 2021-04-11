const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jounghw2:Wlswls7277@cluster0.b42qf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
});

var mongoDB = 'mongodb+srv://jounghw2:Wlswls7277@cluster0.b42qf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
    .connect(
        mongoDB,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use("/api", routes);

        app.listen(5000, () => {
            console.log("Server running...")
        });
    })
    .catch(err => console.log(err));