import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class ProductService {
  constructor() {
    this.products = null;
  }
  async loadProducts() {
    if (!this.products) {
      const data = await readFile(join(__dirname, '../data/products.json'), 'utf8');
      this.products = JSON.parse(data);
      console.log(data);
    }
    console.log(this.products);
    return this.products;
  }

  async resolver(category) {
    console.log(category);
    const productsByCategory = await this.loadProducts();
    return productsByCategory.filter((product) => product.category === category);
  }

  async getProductsByCategoryAsync(category) {
    try {
      console.log("Iniciando");
      console.log(category);
      const filteredProducts = await this.resolver(category);
      if (filteredProducts.length === 0) throw new Error("No hay productos en esa categoria.");
      return filteredProducts;
    } catch (error) {
      throw error;
    } finally {
      console.log("Final");
    }
  }
}

export default new ProductService();
