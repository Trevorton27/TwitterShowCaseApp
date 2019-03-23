

const express = require('express');
const app = express();
const request = require('request-promise');
const path = require('path');


var accessToken = '';
var searchText = 'cats';

console.log('static dir: ', path.join(__dirname, 'react', 'build', 'static'));
app.use('/static', express.static(path.join(__dirname, 'react', 'build', 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'react', 'build', 'index.html'));
});

app.get('/api/tweets', (request, response) => {
   
 getTweets(accessToken).then(tweets => {
     response.send(JSON.parse(tweets).statuses[0]);
 });
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));


request.post('https://api.twitter.com/oauth2/token', {form: {grant_type: 'client_credentials'} },
    function (error, response, body) {

        accessToken = JSON.parse(body).access_token;

        if (accessToken) {
         //getTweets(accessToken);  
        } 
    })
    .auth('upS14sOp8Tk8ufcefKkm0wTVw', 'TawHbqfC2AeTp5OATi3pLpwavShfgX13yid7EDDjaOn4PKImvM', true);

function getTweets(accessToken) {
    return request.get('https://api.twitter.com/1.1/search/tweets.json', 
    {
        'auth': {
            'bearer': accessToken
        },
        qs: {
            q: searchText
        }
    });
}

function searchQuery (getTweets) {
    //route search query from search.js through and link to getTweets function
}





