const express = require("express");
const app = express();
const port = 3000;

let list = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/items", (req, res) => {
  res.json(list);
});

app.post("/form/item", (req, res) => {
  const { name, price } = req.body;
  const item = {
    name,
    price,
  };

  list.push(item);

  res.json(item);
});

app.post("/json/item", (req, res) => {
  const { name, price } = req.body;
  const item = {
    name,
    price,
  };

  list.push(item);

  res.json(item);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
