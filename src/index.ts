import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.routes';


//El siguiente codigo es para cargar las variables de entorno desde un archivo .env
dotenv.config();


const app: Application = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

//rutas de la API
app.use('/api/todos', todoRoutes);


// Conexión a la base de datos MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error de conexión a MongoDB:', err));