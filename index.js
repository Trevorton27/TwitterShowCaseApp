const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
let accessToken = '';
const getToken = () => {
  if (accessToken) return accessToken;
  const config = {
    headers: {
      Content_Type: 'application/x-www-form-urlencode'
    },
    auth: {
      username: process.env.API_KEY,
      password: process.env.API_SECRET_KEY
    }
  };
  return axios
    .post(
      'https://api.twitter.com/oauth2/token',
      'grant_type=client_credentials',
      config
    )
    .then((response) => {
      // axios.defaults.headers.common = {
      //   Authorization: `Bearer ${response.data.access_token}`
      // };
      console.log('access token: ', response.data.access_token);
      accessToken = response.data.access_token;
      // return response.data.access_token;
    })
    .catch((error) => console.log('error is ', error));
};

getToken();

app.use(
  '/static',
  express.static(path.join(__dirname, 'client', 'build', 'static'))
);
app.get('/api/tweets', async (req, res) => {
  // await getToken();
  const searchTerm = req.query.searchTerm;
  axios
    .get(`https://api.twitter.com/1.1/search/tweets.json?q=${searchTerm}`)
    .then((response) => {
      res.send(JSON.parse(response));
      console.log(response);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});
app.get('/api/tweets/random', async (req, res) => {
  // await getToken();
  const usernames = [
    'DalaiLama',
    'elonmusk',
    'jack',
    'natfriedman',
    'peterthiel'
  ];
  const username = usernames[Math.floor(usernames.length * Math.random())];
  axios
    .get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}`,
      {
        headers: {
          Content-Type: 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    .then((response) => response.json())
    .then((response) => res.send(response.data[0]))
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
);
app.listen(port, () => console.log(`Gator app listening on port ${port}`));
