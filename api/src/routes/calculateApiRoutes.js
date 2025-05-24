import express from 'express';
import CalculateService from '../services/calculateService.js'; 

const router = express.Router();


router.post("/", async (req, res) => {
<<<<<<< HEAD

=======
//destructuring, desestructura la variable vector objeto (extrae)
>>>>>>> 9d52c7f (add practice async await and functional)
    const { num1, num2, operation } = req.body;
    let result= 0 ;
    if (num1 === undefined || num2 === undefined || operation === undefined) {
    return res.status(400).json({ error: 'Faltan uno o más parámetros requeridos (num1, num2, operation).' });
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'num1 y num2 deben ser números.' });
    }
    try {
      result = await CalculateService.getResultByCalculate( num1, num2, operation);
    res.json(result);
    } catch (error) {
    res.status(500).send(`Error interno del servidor: ${error.message}` );
    }
    });

<<<<<<< HEAD
    export default router;
=======
    export default router;
>>>>>>> 9d52c7f (add practice async await and functional)
