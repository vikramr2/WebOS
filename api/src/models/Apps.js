const mongoose = require("mongoose");

const schema = mongoose.Schema({
    linkto: String,
    imagelink: String
});

module.exports = mongoose.model("App", schema);