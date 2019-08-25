const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('Finding Records', function(){

	// Save record to the database (as collection gets dropped before every test)
	beforeEach(function(done){
		let char = new MarioChar({
			name: "Mario"
		});

		char.save().then(function(){
			assert(char.isNew === false);
			done();
		});
	});

	// Create tests
	it('finds one record in the database', function(done){
		MarioChar.findOne({name: 'Mario'}).then(function(result){
			assert(result.name === 'Mario');
			done();

		});
	});


	// Next Test Goes Here


});