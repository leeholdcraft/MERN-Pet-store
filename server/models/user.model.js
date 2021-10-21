const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required!"], 
		minlength: [3, "Must be at least 3 characters!"],
	}, 
	type: {
		type: String,
		required: [true, "Must include pet type"],
		minlength: [3, "Must be at least 3 characters!"]
	},
	description: {
		type: String,
		required: [true, "Must include a description!"],
		minlength: [3, "Must be at least 3 characters!"]
	},
	skills1: {
		type: String,
		required: [false, "Optional"],
		minlength: [0, "Optional"]
	},
	skills2: {
		type: String,
		required: [false, "Optional"],
		minlength: [0, "Optional"]
	},
	skills3: {
		type: String,
		required: [false, "Optional"],
		minlength: [0, "Optional"]
	}
})

const User = mongoose.model("User", UserSchema);

module.exports = User;