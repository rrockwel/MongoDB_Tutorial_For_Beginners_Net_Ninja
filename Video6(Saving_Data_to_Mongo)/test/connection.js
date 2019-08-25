const mongoose = require('mongoose');

// Connect to mongoDB
mongoose.connect("mongodb://localhost/testaroo", { useNewUrlParser: true} );

mongoose.connection.once('open', function(){
	console.log("Connection has been made, now make fireworks...");
}).on('err', function(err){
	console.log("Connection error ", error);
});