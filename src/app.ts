import express from "express";

const app = express();

const categorias = [
  { id: 1, nome: "Pizza Calabresa", descricao: "Pizza com molho de tomate, queijo muçarela, calabresa fatiada e cebola." },
  { id: 2, nome: "Pizza Frango com Catupiry", descricao: "Pizza com molho de tomate, queijo muçarela, frango desfiado e catupiry." },
  { id: 3, nome: "Pizza Portuguesa", descricao: "Pizza com molho de tomate, queijo muçarela, presunto, ovo, cebola, tomate e azeitona." }
];

const produtos = [
  {
    id: 1,
    nome: "Pizza Calabresa",
    descricao: "Molho de tomate, muçarela, calabresa fatiada e cebola.",
    preco: 39.90
  },
  {
    id: 2,
    nome: "Pizza Frango com Catupiry",
    descricao: "Molho de tomate, muçarela, frango desfiado e catupiry.",
    preco: 42.90
  },
  {
    id: 3,
    nome: "Pizza Portuguesa",
    descricao: "Molho de tomate, muçarela, presunto, ovo, cebola, tomate e azeitona.",
    preco: 44.90
  }
];

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API Restaurante",
        version: "1.0.0",
    })
});

app.get("/categorias", (req, res) => {
    res.status(200).json(categorias)
});

app.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
});

export default app