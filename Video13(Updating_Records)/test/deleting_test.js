const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('Deleting Records', function(){

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
	it('Deletes one record from the database', function(done){
		
		MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(result){
				assert(result === null);
				done();
			});
		});
	});



	// Next Test Goes Here


});