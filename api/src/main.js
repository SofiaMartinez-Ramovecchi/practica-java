import express from "express";

import calculateApiRoutes from "./routes/calculateApiRoutes.js"; 
import productApiRoutes from "./routes/productApiRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
res.send("Hello World!");
});

app.use('/calculate-api', calculateApiRoutes);

app.use('/products-api', productApiRoutes);   

app.listen(port, () => {
console.log(`Practica express y js app listening on port ${port}`);
});


