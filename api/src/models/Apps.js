const mongoose = require("mongoose");

const schema = mongoose.Schema({
    linkto: String,
    imagelinj: String
});

module.exports = mongoose.model("App", schema);