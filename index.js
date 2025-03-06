const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get("/", (req, res) => {
    res.send("shrimple eoeo api");
})

app.get("/ip", (req, res) => {
    res.send(req.ip);
})