const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
        timestamps: true, // createdAt, updatedAt
    },
);

module.exports = mongoose.model('Notes', notesSchema);
