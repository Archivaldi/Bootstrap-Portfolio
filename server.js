const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/portfolio", (req, res) => {
    res.render("portfolio");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});