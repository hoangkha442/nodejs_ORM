import express from 'express';
import cors from 'cors';
import rootRoute from './routes/rootRoutes.js';
const app = express();

// định dạng
const port = 8080
app.use(express.json());
app.listen(port)

// liên kết giữa FE và BE 
app.use(cors())

app.use(rootRoute)