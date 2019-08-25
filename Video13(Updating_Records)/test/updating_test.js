const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('Updating Records', function(){

	// Hoist variable assigned in beforeEach block so it can be used in 'find by id' test
	let char;

	// Save record to the database (as collection gets dropped before every test)
	beforeEach(function(done){
		char = new MarioChar({
			name: "Mario"
		});

		char.save().then(function(){
			done();
		});
	});

	// Create tests
	it('Update one record in the database', function(done){
		
		MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
			MarioChar.findOne({_id: char._id}).then(function(result){
				assert(result.name === 'Luigi');
				done();
			});
		});

		
	});



	// Next Test Goes Here


});