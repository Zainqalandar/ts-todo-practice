import type { Request, Response } from 'express';

const Note = require('../models/note.model');

// CREATE
const createNote = async (req: Request, res: Response) => {
	try {
		const note = await Note.create(req.body);

		return res.status(201).json({
			success: true,
			data: note,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

const deleteNote = async (req: Request, res: Response) => {
	try {
		console.log('Params: ', req.params.id);

		const note = await Note.findByIdAndDelete(req.params.id);
		if (!note) {
			return res.status(404).json({
				message: 'Note not found',
			});
		}
		return res.status(204).json({
			success: true,
			data: null,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

const getSingleNote = async (req: Request, res: Response) => {
	try {
		const note = await Note.findById({ _id: req.params.id });

		if (!note) {
			return res.status(404).json({
				message: 'Note not found',
			});
		}

		return res.status(200).json({
			success: true,
			data: note,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

const updateNote = async (req: Request, res: Response) => {
	try {
		const doc = req.body;
		const note = await Note.findByIdAndUpdate(req.params.id, doc, {
			new: true,
			runValidators: true,
		});

		if (!note) {
			return res.status(404).json({
				message: 'Note not found',
			});
		}
		return res.status(200).json({
			success: true,
			data: note,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

const getAllNotes = async (req: Request, res: Response) => {
	try {
		const notes = await Note.find();

		return res.status(200).json({
			success: true,
			results: notes.length,
			data: notes,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	createNote,
	deleteNote,
	getAllNotes,
	updateNote,
	getSingleNote,
};
