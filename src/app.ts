import express, { Request, Response } from 'express';
const app = express();

const noteRoutes = require('./routes/note.routes');

app.use(express.json());

app.use('/api/v1/notes', noteRoutes);

export default app;
