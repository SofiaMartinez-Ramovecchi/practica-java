import fs from 'fs';
import { readFile } from 'fs/promises';

const rutaRefugio = "../practica-js-express/api/src/data/refugio_info.json";
const rutaReservas = "../practica-js-express/api/src/data/reservas_actuales.log";

const claves = [
    'FECHA_RESERVA',
    'ID_RESERVA',
    'NOMBRE_HUESPED',
    'FECHA_INGRESO',
    'NOCHES',
    'PERSONAS',
    'SERVICIO_PRINCIPAL',
    'NOTAS'
];

const leerArchivo = async (ruta) => {
    const contenido = await readFile(ruta, 'utf8');
    return contenido;
  };
  

export class ReservarTurnoService {

    constructor() {
  
    }

    async getTurnosAsync(fechaTurno, cantPersonas, cantNoches){
        return await buscarReserva(fechaTurno, cantPersonas, cantNoches);
    }

   async cargarReservas() {
        const dataReservas = await leerArchivo(rutaReservas);
        return dataReservas;
    }

    cargarRefugioInfo() {
        const dataRefugio = fs.readFile(rutaRefugio, 'utf8', err, data => {
            if (err) throw err;
            return new Promise((resolve, reject) => {
                resolve(data);
            });
        });
    }

    guardarReservas() {
        try {
            const data = JSON.stringify(this.reservas);
            fs.writeFileSync(rutaReservas, data);
        } catch (err) {
            console.error(err);
        }
    }

    reservarTurno(reserva) {
        this.reservas.push(reserva);
        this.guardarReservas();
    }

    obtenerReservas() {
        return this.reservas;
    } 
}

/* Promise.all(
    {
        async buscareservas
        async buscarhotel
    }
)
*/
async function buscarReserva(fechaTurno, cantPersonas, cantNoches) {
    try {
        const contenido = await leerArchivo(rutaReservas, 'utf8');
        const dataSplit = contenido.split(';') ;
        const dataReserver = dataSplit.map(item => {                
            const lineas = item
                .split('\n')
                .map(l => l.trim())
                .filter(l => l.length > 0);              
                
                const objetos = lineas.map((fila, index) => {
                    const valores = fila.split('|');

                    if (valores.length !== claves.length) {
                        console.warn(`⚠️ Línea ${index + 1} inválida:`, fila);
                        return null;
                    }

                    const obj = {};
                    
                    claves.forEach((clave, i) => {
                        obj[clave] = valores[i];
                    });

                    return obj;
                }).filter(Boolean); 

                return objetos;
        });

        const reservas = dataReserver.flat();

        const formatFecha = fechaISO => {
            if (!fechaISO) return null;
            const fecha = new Date(fechaISO);
            return isNaN(fecha) ? null : fecha.toISOString().slice(0, 10);
          };

        const filtradas = reservas.filter(turno => 
            formatFecha(turno.FECHA_RESERVA) === fechaTurno && turno.PERSONAS === cantPersonas && turno.NOCHES === cantNoches
          );

          return filtradas;
        
    } catch (err) {
        console.error('❌ Error al leer el archivo:', err);
        throw err;
    }
}

export default new ReservarTurnoService();