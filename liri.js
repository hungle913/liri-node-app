//read and set environment variables

require("dotenv").config();

//import keys and store in variable

var keys = require("./keys");

// variable to access keys

var spotify = new Spotify(keys.spotify);

// variables for user inputs

var command = process.argv[2];
var input = process.argv[3];

// require packages

var fs = require("fs");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");

// add switch statements to execute code block

switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
};


