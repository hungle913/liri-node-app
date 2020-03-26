# LIRI-Bot


## Introduction

LIRI-Bot is a Node app. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and RecognitionInterface. LIRI is a command line node app that takes in parameters provided by the user and gives back data requested. 


# Liri Setup

1. Clone the repository
2. Run npm install. This will install the 4 following packages...

    * Node-Spotify-API

    * Axios (This module will be used to get the IMDB and BandsInTown API data)
    
    * Moment

    * DotENV

3. Create a .env file in the same directory as the rest of the files. In the .env file please add the following -

    '# Spotify API keys'

    'SPOTIFY_ID=your-spotify-ID-here'

    'SPOTIFY_SECRET=your-spotify-secret-here'


# Liri Function

These are the functions available to run to pull data.

    * concert-this

    * spotify-this-song

    * movie-this

    * do-what-it-says


# How to use the above functions in your terminal to pull data.

* node liri.js concert-this 'concert or band name'

This will show the following information about each concert event to your terminal/bash window.

    * Name of the Venue

    * Location of the Venue

    * Date of the Venue


*  node liri.js spotify-this-song 'song name'

This will show the following information about each song in your terminal/bash window.

    * Artist(s)

    * The song's name

    * A preview link of the song from Spotify

    * The album that the song is from


