const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
	title: {
		type: String,
		trim: true,
		// required:'Journal Title cannot be Empty'
	},

	body: {
		type: Object,
		trim: true,
	},

	entryDate: {
		type: String,
		// default: null,
	},

	date: {
		type: Date,
		default: Date.now(),
	},
	// pic_link: {
	//     type: String,
	//   },
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
