import express from 'express';
import ProductService from '../services/productService.js'; 

const router = express.Router();

router.get("/", async (req, res) => {
const categoria = req.query.category;
console.log(categoria);
try {
const products = await ProductService.getProductsByCategoryAsync(categoria);
res.json(products);
} catch (error) {
res.status(500).send(`Error interno en la obtención de productos: ${error.message}`);
}
});

export default router;