const express = require('express');
const app = express();
const request = require('request-promise');
const path = require('path');


var accessToken = '';


app.use('/static', express.static(path.join(__dirname, 'react', 'build', 'static')));



app.get('/api/tweets', (request, response) => {
    
    console.log('GET query is: ', request.query.searchTerm);
    getTweets(accessToken, request.query.searchTerm).then(tweets => {
     response.send(JSON.parse(tweets).statuses);
 });
});

app.get('/api/tweets/random', (request, response) => {

   var username = [
        'DalaiLama',
        'elonmusk',
        'jack',
        'natfriedman',
        'peterthiel'
      ];
      
     username = username[Math.floor(username.length * Math.random()*6)];

     console.log(getRandomTweets);

    getRandomTweets(accessToken, username).then(tweets => {
     response.send(JSON.parse(tweets) [0]);
 });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react', 'build', 'index.html'));
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));


request.post('https://api.twitter.com/oauth2/token', {form: {grant_type: 'client_credentials'} },
    function (error, response, body) {

        accessToken = JSON.parse(body).access_token;

        if (accessToken) {
         
        } 
    })
    .auth('upS14sOp8Tk8ufcefKkm0wTVw', 'TawHbqfC2AeTp5OATi3pLpwavShfgX13yid7EDDjaOn4PKImvM', true);

function getTweets(accessToken, searchTerm) {
    return request.get('https://api.twitter.com/1.1/search/tweets.json', 
    {
        'auth': {
            'bearer': accessToken
        },
        qs: {
            q: searchTerm
        }
    });
}

function getRandomTweets(accessToken, username) {
    return request.get('https://api.twitter.com/1.1/statuses/user_timeline.json', 
    {
        'auth': {
            'bearer': accessToken
        },
        qs: {
            screen_name: username
        }
    });
}









