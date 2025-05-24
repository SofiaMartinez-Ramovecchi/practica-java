import express from "express";
<<<<<<< HEAD

import calculateApiRoutes from "./routes/calculateApiRoutes.js"; 
import productApiRoutes from "./routes/productApiRoutes.js";
=======
import apiRoutes from "../src/routes/index.js";
import morgan from "morgan";
>>>>>>> 9d52c7f (add practice async await and functional)

const app = express();
const port = 3000;

app.use(express.json());
<<<<<<< HEAD
=======
app.use(morgan("dev"));
>>>>>>> 9d52c7f (add practice async await and functional)
app.get("/", (req, res) => {
res.send("Hello World!");
});

<<<<<<< HEAD
app.use('/calculate-api', calculateApiRoutes);

app.use('/products-api', productApiRoutes);   
=======
app.use("/api", apiRoutes);
>>>>>>> 9d52c7f (add practice async await and functional)

app.listen(port, () => {
console.log(`Practica express y js app listening on port ${port}`);
});


