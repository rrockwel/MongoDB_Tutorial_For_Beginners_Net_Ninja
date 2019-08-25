const mongooes = require('mongoose');
const schema = mongoose.Schema;

// Create schema and Model

const MarioCharSchema = new Schema({
	name: String,
	weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;

