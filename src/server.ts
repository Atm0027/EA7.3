// Importaciones usando la sintaxis de ES Modules (import/export), cumpliendo el requisito de no usar 'require'.
import express, { Request, Response } from 'express';
import mysql, { RowDataPacket } from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env para proteger las credenciales.
dotenv.config();

const app = express();
// Configuración del puerto: usamos la variable de entorno o el 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Pool de conexiones a la base de datos.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Interface TypeScript que coincide exactamente con las columnas de la tabla MySQL.
interface Pokemon extends RowDataPacket {
    id: number;
    nombre: string;
    nivel_base: number;
    es_legendario: boolean;
}

// Ruta GET '/' - Devuelve un mensaje de bienvenida en HTML.
app.get('/', (_req: Request, res: Response) => {
    res.send(`
        <h1>Bienvenido a la API de la Pokédex</h1>
        <p>Esta API expone datos sobre algunos Pokémon.</p>
        <p>Visita /api/datos para obtener los registros.</p>
    `);
});

// Ruta GET '/api/datos' - Se conecta a la BBDD y devuelve los registros en JSON.
app.get('/api/datos', async (_req: Request, res: Response) => {
    try {
        const [rows] = await pool.query<Pokemon[]>('SELECT * FROM pokemon');
        res.json(rows);
    } catch (error) {
        console.error("Error al consultar la base de datos:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
});

// Iniciamos el servidor para que empiece a escuchar peticiones.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
