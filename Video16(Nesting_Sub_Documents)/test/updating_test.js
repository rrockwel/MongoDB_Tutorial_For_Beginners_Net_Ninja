const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('Updating Records', function(){

	// Hoist variable assigned in beforeEach block so it can be used in 'find by id' test
	let char;

	// Save record to the database (as collection gets dropped before every test)
	beforeEach(function(done){
		char = new MarioChar({
			name: "Mario",
			weight: 50
		});

		char.save().then(function(){
			done();
		});
	});

	// Create tests
	it('Updates one record in the database', function(done){
		
		MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
			MarioChar.findOne({_id: char._id}).then(function(result){
				assert(result.name === 'Luigi');
				done();
			});
		});
		
	});

	it('Increments the weight by 1', function(done){
		
		MarioChar.update({}, {$inc: {weight: 1}}).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(result){
				assert(result.weight === 51);
				done();
			})
		});
		
		
	});

	it('Multiplies the weight by 3', function(done){
		
		MarioChar.update({}, {$mul: {weight: 3}}).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(result){
				assert(result.weight === 150);
				done();
			})
		});
	});



	// Next Test Goes Here


});