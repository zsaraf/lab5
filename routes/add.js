var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {
		"imageURL" 		: 'http://lorempixel.com/400/400/people',
		"name" 	   		: req.query.name,
		"description"	: req.query.description
	};

	data["friends"].push(newFriend);
	res.render('add', newFriend);
 }