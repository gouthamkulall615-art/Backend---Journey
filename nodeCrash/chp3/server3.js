import { createServer } from "http";
const PORT = process.env.PORT || 8000;
const products = [
  {
    id: 1,
    name: "shirts",
    price: 2300,
  },
  {
    id: 2,
    name: "pants",
    price: 3200,
  },
  {
    id: 3,
    name: "coats",
    price: 8300,
  },
];

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const jsonMiddleware = (req, res, next) => {
  res.setHeader("content-type", "application/json");
  next();
};

const getProductsHandler = (req, res, next) => {
  res.write(JSON.stringify(products));
  res.end();
};

const createProductHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    try {
      const newProducts = JSON.parse(body);
      if (!newProducts.id || !newProducts.name) {
        res.statusCode = 400;
        res.write(JSON.stringify({ message: "Invalid product data" }));
        return res.end();
      }
      products.push(newProducts);
      res.statusCode = 201;
      res.write(JSON.stringify(newProducts));
      res.end();
    } catch (error) {
      res.statusCode = 400;
      res.write(JSON.stringify({ message: "Invalid JSON format" }));
      res.end();
    }
  });
};

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "route is not found" }));
  res.end();
};

const getProductsByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const product = products.find((product) => product.id === parseInt(id));
  if (product) {
    res.write(JSON.stringify(product));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "products  not found" }));
  }
  res.end();
};
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/products" && req.method == "GET") {
        getProductsHandler(req, res);
      } else if (
        req.url.match(/\/api\/products\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getProductsByIdHandler(req, res);
      } else if (req.url === "/api/products" && req.method === "POST") {
        createProductHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
