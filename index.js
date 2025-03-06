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

app.get("/ongaku", (req, res) => {
    // おんがくjsonの長さ 1からカウントアップ
    const ongaku_json_length = Object.keys(ongaku).length;
    // ランダムな整数を出力してデータを返す
    const ongaku_random_number = Math.floor(Math.random() * ongaku_json_length) + 1;
    res.send(ongaku[ongaku_random_number]);
})