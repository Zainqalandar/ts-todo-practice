const express = require('express');
const router = express.Router();

const {
	createNote,
	getAllNotes,
	deleteNote,
	getSingleNote,
	updateNote,
} = require('../controllers/note.controller');

router.route('/').post(createNote).get(getAllNotes);

router.route('/:id').delete(deleteNote).get(getSingleNote).put(updateNote);

module.exports = router;
