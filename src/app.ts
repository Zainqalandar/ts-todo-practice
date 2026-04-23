const express = require('express');
const app = express();

const noteRoutes = require('./routes/note.routes');

app.use(express.json());

app.use('/api/v1/notes', noteRoutes);

module.exports = app;
