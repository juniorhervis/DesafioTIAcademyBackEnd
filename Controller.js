const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())

app.get("/", function(req, res) {
    res.send("Deu boa !")
})

app.get("/clientes", function(req, res) {
    res.send("Deu boa clientes !")
})

app.get("/servicos", function(req, res) {
    res.send("Deu boa serviços !")
})

app.get("/pedidos", function(req, res) {
    res.send("Deu boa pedidos !")
})

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log("API Started: http://localhost:3001")
})