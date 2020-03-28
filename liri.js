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

// Start function for concert-this

function concertThis(input) {
    var artist = input;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            // console.log(response.data);
            console.log("Name of the venue:", response.data[i].venue.name);
            console.log("Venue location:", response.data[i].venue.city);
            var eventDate = moment(response.data[i].datetime).format('MM/DD/YYYY');
            console.log("Date of the Event:", eventDate);
        };
    });
};

// Start function for spotify-this-song

function spotifySong(input) {
    var songInput = input;
    
// Search paramters copied from Spotify API example.

    spotify.search({ type: 'track', query: songInput }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);   
        console.log("Preview link of song: " + data.tracks.items[0].album.external_urls.spotify);     
    });
}

// Start function for movie-this

