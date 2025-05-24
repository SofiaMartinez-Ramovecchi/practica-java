import express from 'express';
import ReservarTurnoService from '../services/reservarTurnoService.js'; 

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { fechaTurno, cantPersonas, cantNoches } = req.query;
        const turnoListo = await ReservarTurnoService.getTurnosAsync(fechaTurno, cantPersonas, cantNoches);
        res.json(turnoListo);
    } catch (error) {
        res.status(500).send(`Error interno en la obtención de turnos: ${error.message}`);
    }
});

export default router;
