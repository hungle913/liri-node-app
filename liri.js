//read and set environment variables

require("dotenv").config();

//import keys and store in variable

var keys = require("./keys");

// variable to access keys

var spotify = new Spotify(keys.spotify);

// variables for user inputs

var command = process.argv[2];
var input = process.argv[3];

