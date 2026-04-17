const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

const products = [
  {
    id: 1,
    name: "pant",
    price: 900,
  },
  {
    id: 2,
    name: "shirt",
    price: 800,
  },
  {
    id: 3,
    name: "coats",
    price: 1000,
  },
];

//get all products

app.get("/api/products", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(products.slice(0, limit));
  }
  res.status(200).json(products);
});

//get only products by id

app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    res.status(404).json({ msg: "not found" });
  } else {
    res.status(200).json(product);
  }
});
app.listen(PORT, () => {
  console.log(`server running on ${PORT} `);
});
