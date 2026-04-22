import express from 'express';
const router = express.Router();

const { createNote, getAllNotes } = require('../controllers/note.controller');

router.route('/')
.post(createNote)
.get(getAllNotes)


module.exports = router;
