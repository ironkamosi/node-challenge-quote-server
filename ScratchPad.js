const express = require("express");
const app = express();
const items = [
  {
    product: "Premier Housewives Stainless Steel Toolset",
    price: 19.97,
    category: "homeware",
  },
  {
    product: "iChinchin Women's Long Sleeve T Shirt",
    price: 15.99,
    category: "clothing",
  },
  {
    product: "U-Design Toothbrush Holder Set",
    price: 10.55,
    category: "homeware",
  },
  { product: "Elgar 400W Hand Mixer", price: 25.99, category: "appliances" },
  {
    product: "Great Gatsby White and Gold Kettle",
    price: 49.99,
    category: "homeware",
  },
  {
    product: "AM Bristol Men's Fitted Boxers",
    price: 24.99,
    category: "clothing",
  },
  {
    product: "Disnoy Brittle Small Cookie Jar",
    price: 10.01,
    category: "homeware",
  },
  {
    product: "Oreal-C Cross Action Electric Toothbrush",
    price: 22.19,
    category: "appliances",
  },
  {
    product: "Wrundole Designs Duck Wall Clock",
    price: 34.5,
    category: "homeware",
  },
  {
    product: "RuralComfort Dressing Gown for Men",
    price: 26.99,
    category: "clothing",
  },
];
app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});
// Category as a route parameter
app.get("/api/categories/:category", function (req, res) {
  const filteredItems = items.filter(
    (item) => item.category === req.params.category
  );
  res.json(filteredItems);
});
// Category as a query string parameter
app.get("/api/items", function (req, res) {
  let filteredItems = items;
  if (req.query.cat !== undefined) {
    filteredItems = items.filter((item) => item.category === req.query.cat);
  }
  res.json(filteredItems);
});
app.get("/api/items/:index", function (req, res) {
  const index = parseInt(req.params.index);
  const item = items[index];
  if (item === undefined) {
    res.sendStatus(404);
  } else {
    res.json(items[index]);
  }
});
app.listen(3000, function () {
  console.log("Running on port 3000");
});
