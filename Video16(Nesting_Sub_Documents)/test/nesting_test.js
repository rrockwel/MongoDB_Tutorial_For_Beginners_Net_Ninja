const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe our tests

describe('Nesting Records', function(){
	// Drop collection before each test
	beforeEach(function(done){
		mongoose.connection.collections.authors.drop(function(){
			done();
		});
	});
	// Create Tests
	it('Create an author with sub-documents', function(done){
		let pat = new Author({
			name: 'Patrick Rothfuss',
			age: 46,
			books: [{
				title: 'Name of the Wind', 
				pages:400
			}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){
				assert(result.books.length === 1);
				done();
			});
		});
	});

	it('Add a book to an existing author', function(done){
		let pat = new Author({
			name: 'Patrick Rothfuss',
			age: 46,
			books: [{
				title: 'Name of the Wind',
				pages: 400
			}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){
				// add a book to the books array
				result.books.push({title: "Wise Man's Fear", pages: 500});
				result.save().then(function(){
					Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){
						assert(result.books.length === 2);
						done();
					});
				});
			});
		});
	});
});