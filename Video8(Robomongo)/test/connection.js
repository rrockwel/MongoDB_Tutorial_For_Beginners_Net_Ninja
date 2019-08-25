const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the database before tests run
before(function(done){
	// Connect to mongoDB
	mongoose.connect("mongodb://localhost/testaroo", { useNewUrlParser: true} );

	mongoose.connection.once('open', function(){
		console.log("Connection has been made, now make fireworks...");
		done();
	}).on('err', function(err){
		console.log("Connection error ", error);
	});

});

