const path = require("path");
const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/inxed.html"));
});