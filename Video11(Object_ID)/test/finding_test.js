const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('Finding Records', function(){

	// Hoist variable assigned in beforeEach block so it can be used in 'find by id' test
	let char;

	// Save record to the database (as collection gets dropped before every test)
	beforeEach(function(done){
		char = new MarioChar({
			name: "Mario"
		});

		char.save().then(function(){
			assert(char.isNew === false);
			done();
		});
	});

	// Create tests
	it('Finds one record by name from the database', function(done){
		MarioChar.findOne({name: 'Mario'}).then(function(result){
			assert(result.name === 'Mario');
			done();

		});
	});

	it('Finds one record by ID from the database', function(done){
		MarioChar.findOne({_id: char._id}).then(function(result){
			assert(result._id.toString() === char._id.toString());
			done();

		});
	});


	// Next Test Goes Here


});