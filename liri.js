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

// create variables for default if missing info

var defaultConcert = "Celine Dion"
var defaultSpotify = "The Sign"
var defaultMovie = "Mr. Nobody"

// add switch statements to execute code block

switch (command) {
    case "concert-this":
        if(input===undefined) {
            input = defaultConcert;
        }
        concertThis(input);
        break;
    case "spotify-this-song":
        if(input===undefined) {
            input = defaultSpotify;
        }
        spotifySong(input);
        break;
    case "movie-this":
        if(input===undefined) {
            input = defaultMovie;
        }
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
            console.log("-------------------------------------------------------");
            console.log("Name of the venue:", response.data[i].venue.name);
            console.log("Venue location:", response.data[i].venue.city);
            var eventDate = moment(response.data[i].datetime).format('MM/DD/YYYY');
            console.log("Date of the Event:", eventDate);
            console.log("-------------------------------------------------------");
        };
    });
};

// Start function for spotify-this-song

function spotifySong(input) {
    var songInput = input;

// Search paramters copied from Spotify API example.

    spotify.search({ type: 'track', query: songInput }).then(function(response) {
        for (var i = 0; i < 20; i++) {
        console.log("-------------------------------------------------------");
        console.log("Artist: " + response.tracks.items[i].album.artists[0].name);
        console.log("Album: " + response.tracks.items[i].album.name);   
        console.log("Preview link of song: " + response.tracks.items[i].album.external_urls.spotify);  
        console.log("-------------------------------------------------------"); 
        };  
    });
};

// Start function for movie-this

function movieThis(input) {
    var movieInput = input;

    
}