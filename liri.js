//read and set environment variables

require("dotenv").config();

//import keys and store in variable

var keys = require("./keys");

// variable to access keys

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// variables for user inputs

var command = process.argv[2];
var input = process.argv[3];

// require packages

var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

// add switch statements to execute code block

switch (command) {
    case "concert-this":
        concertThis(input);
        break;
    case "spotify-this-song":
        spotifySong(input);
        break;
    case "movie-this":
        movieThis(input);
        break;
    case "do-what-it-says":
        doThis(input);
        break;
};

// start function for concert-this

function concertThis(input) {
    var artist = input;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log("Name of the venue:", response.data[i].venue.name);
            console.log("Venue location:", response.data[i].venue.city);
            var eventDate = moment(response.data[i].datetime).format('MM/DD/YYYY');
            console.log("Date of the Event:", eventDate);
        };
    });
};

