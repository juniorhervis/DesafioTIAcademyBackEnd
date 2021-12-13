const express = require("express");
const cors = require("cors");

const models = require("./models");

const app = express();
app.use(cors());

let cliente = models.Cliente;
let itemPedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get("/", function (req, res) {
  res.send("Deu boa !");
});

app.get("/servicos", async (req, res) => {
  await servico.create({
    nome: "Nodejs",
    descricao: "Desenvolvimento de aplicação back-end",
    createAt: new Date(),
    updateAt: new Date(),
  });
  res.send("Serviço node criado com sucesso!");
});

app.get("/clientes", async (req, res) => {
  await cliente.create({
    nome: "Pedro",
    endereco: "Rua das Flores",
    cidade: "Curitiba",
    uf: "Paraná",
    nascimento: 12 / 03 / 2000,
    clienteDesde: 15 / 07 / 2019,
    createAt: new Date(),
    updateAt: new Date(),
  });
  res.send("Registro de Cliente criado com sucesso!");
});

app.get("/pedidos", async (req, res) => {
  await pedido.create({
    dataPedido: 13 / 12 / 2021,
    createAt: new Date(),
    ClienteId: 2,
    updateAt: new Date(),
    
  });
  res.send("Pedido criado com sucesso!");
});

app.get("/item", async (req, res) => {
    await itemPedido.create({
      PedidoId: 1,
      ServicoId: 1,
      quantidade: 12,
      valor: 12.50,
      createAt: new Date(),
      updateAt: new Date(),
      
    });
    res.send("Item pedido criado com sucesso!");
  });

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
  console.log("API Started: http://localhost:3001"); 
});
