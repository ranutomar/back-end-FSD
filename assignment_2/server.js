const express = require("express");

const app = express();

const PORT = 3000;

// Create an empty array for products
const products = [];

// Create 100 products
for (let i = 1; i <= 100; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        price: i * 100,
        category: `Category ${((i - 1) % 5) + 1}`
    });
}

// GET all products
app.get("/products", (req, res) => {
    res.json(products);
});

// GET a single product
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});