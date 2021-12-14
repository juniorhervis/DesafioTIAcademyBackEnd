const express = require("express");
const cors = require("cors");

const models = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let itemPedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get("/", function (req, res) {
  res.send("Deu boa !");
});
//
//
//
app.post("/servicos", async (req, res) => {
  await servico
    .create(req.body)
    .then(function () {
      return res.json({
        erro: false,
        message: "Serviço criado com sucesso!",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Foi impossível se conectar.",
      });
    });
});
//
//
//
app.post("/clientes", async (req, res) => {
  await cliente
    .create(req.body)
    .then(function () {
      return res.json({
        erro: false,
        message: "Cliente criado com sucesso!",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Foi impossível se conectar.",
      });
    });
});
//
//
//
app.post("/pedidos", async (req, res) => {
  await pedido
    .create(req.body)
    .then(function () {
      return res.json({
        erro: false,
        message: "Pedido criado com sucesso!",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Foi impossível se conectar.",
      });
    });
});
//
//
//
app.post("/item", async (req, res) => {
  await itemPedido
    .create(req.body)
    .then(function () {
      return res.json({
        erro: false,
        message: "item criado com sucesso!",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Foi impossível se conectar.",
      });
    });
});

app.get("/listaservicos", async (req, res) => {
  await servico
    .findAll({
      order: [["nome", "DESC"]],
    })
    .then(function (servicos) {
      return res.json({ servicos });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Foi impossível se conectar.",
      });
    });
});

app.get("/listaclientes", async (req, res) => {
  await cliente
    .findAll({
      order: [["Id", "ASC"]],
    })
    .then(function (clientes) {
      return res.json({ clientes });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Foi impossível se conectar.",
      });
    });
});

app.get("/listapedidos", async (req, res) => {
  await pedido
    .findAll({
      raw: true,
    })
    .then(function (pedidos) {
      return res.json({ pedidos });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Foi impossível se conectar.",
      });
    });
});

app.get("/ofertaservicos", async (req, res) => {
  await servico.count("id").then(function (servicos) {
    res.json({ servicos });
  });
});

app.get("/contarclientes", async (req, res) => {
  await cliente.count("id").then(function (clientes) {
    res.json({ clientes });
  });
});

app.get("/contarpedidos", async (req, res) => {
  await pedido.count("id").then(function (pedidos) {
    res.json({ pedidos });
  });
});

app.get("/servico/:id", async (req, res) => {
  await servico
    .findByPk(req.params.id)
    .then((servID) => {
      return res.json({
        erro: false,
        servID,
      });
    })
    .catch(function (error) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível conectar!",
      });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
  console.log("API Started: http://localhost:3001");
});
