use("ecommerce");

// db.products.updateOne({ name: "Wireless Mouse" }, { $set: { price: 699 } });

// db.products.updateMany({ category: "Electronics" }, { $inc: { stock: 11 } });

db.products.updateOne(
  { name: "Wireless Mouse" },
  { $push: { tags: "new tag" } },
);
