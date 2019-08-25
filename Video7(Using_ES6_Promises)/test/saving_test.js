const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('saving records', function(){

	// Create tests
	it('saves a record to the database', function(done){

		let char = new MarioChar({
			name: "Mario"
		});

		char.save().then(function(){
			assert(char.isNew === false);
			done();
		});


	});


	// Next Test Goes Here


});