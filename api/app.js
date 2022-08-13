var express = require("express");
var app = express();
const router = require("./routes");
app.use(express.json());
app.use("/", router);
module.exports = app;
app.listen(3001);
