use("ecommerce");
// db.products.find({ name: "Wireless Mouse" });
// db.products.find({ category: "Electronics" });
// db.products.find({ price: { $gt: 1000 } });

//gt means greater than
//gte means greater than or equal to
//lt means less than
//lte means less than or equal to

// db.products.find({ price: { $gt: 1000, $lte: 50000 } }); --> and condtion

// db.products.find({
//   $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }],
// });--> OR condition

// db.products.find({}, { name: 1, price: 1, _id: 0 })-->select the specific fields

db.products.find().sort({ price: -1 }).skip(1).limit(2);
