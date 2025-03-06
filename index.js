const express = require("express");
const app = express();
const ongaku = require("./o.json");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get("/", (req, res) => {
    res.send("shrimple eoeo api");
})

app.get("/ip", (req, res) => {
    res.send(req.ip);
})