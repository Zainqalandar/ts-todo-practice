import express, { Request, Response } from 'express';

const Note = require('../models/note.model');

// CREATE
const createNote = async (req: Request, res: Response) => {
	try {
		const note = await Note.create(req.body);

		res.status(201).json({
			success: true,
			data: note,
		});
	} catch (error: any) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const getAllNotes = async (req: Request, res: Response) => {
	try {
		const notes = await Note.find();

		res.status(201).json({
			success: true,
			results: notes.length,
			data: notes,
		});
	} catch (error: any) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const deleteNote = async (req: Request, res: Response) => {
	try {
		const note = await Note.findByIdAndDelete(req.params.id);

		if (!note) {
			res.status(404).json({
				message: 'Note not found',
			});
		}

		res.status(201).json({
			success: true,
			data: note,
		});
	} catch (error: any) {
		res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = { createNote, deleteNote, getAllNotes };
