import React, { useState } from 'react';
import '../index.css';
import '../App.css';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Random = () => {
  //const [userName, setUserName] = useState('')
  const [randomUser, setRandomUser] = useState([]);

  const getRandomTweets = () => {
    axios.get('/api/tweets/random').then((response) => {
      setRandomUser(response.data);
    });
  };

  const renderRandomTweet = (tweets) => {
    // console.log('renderRandomTweet function was run');
    // const tweets = this.state.searchResults;

    return tweets.map((tweet) => {
      const date = new Date(tweet.created_at);

      const options = {
        hour: 'numeric',
        minute: 'numeric'
      };
      const newDateFormat = Intl.DateTimeFormat('en-US').format(date);
      const newTimeFormat = Intl.DateTimeFormat('en-US', options).format(date);
      return (
        <div className='row justify-content-center'>
          <div
            className='card  mb-3 col-6'
            style={{ paddingLeft: '0px', paddingRight: '0px' }}
          >
            <div
              class='card card-header mb-3'
              style={{ paddingBottom: '0px', backgroundColor: '#fff' }}
            >
              <div
                style={{
                  marginBottom: '20px',
                  margin: '0px',
                  display: 'inlineBlock'
                }}
              >
                {' '}
                <img
                  className='profile-image'
                  alt='profile picture'
                  src={tweet.user.profile_image_url}
                  style={{ marginBottom: '20px' }}
                />
                <div>{tweet.user.name}</div>
                <p style={{ fontSize: '13px' }}>{tweet.user.description}</p>
              </div>{' '}
            </div>
            <div
              class='card-body text-dark'
              style={{ paddingBottom: '0px', paddingTop: '0px' }}
            >
              <p class='card-text' style={{ color: '#fff' }}>
                "{tweet.text}"
              </p>
              <div
                style={{
                  padding: '8px',
                  width: '100%',
                  fontSize: '13px',
                  float: 'left',
                  backgroundColor: '#fff',
                  borderTop: '1px'
                }}
              >
                {' '}
                <p
                  style={{
                    marginBottom: '0px',
                    fontSize: '10px',
                    color: '#6f7d88'
                  }}
                >
                  Created at: {newDateFormat} - {newTimeFormat}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <PerfectScrollbar>
      <div className='container'>
        <br />
        <h3 className='card-title'>Welcome To The Random Tweet Finder.</h3>
        <p>
          <button
            className='btn btn-primary'
            type='button'
            data-toggle='collapse'
            data-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
          >
            How does this work?
          </button>
        </p>
        <div className='collapse' id='collapseExample'>
          <div className='card card-body'>
            Upon clicking the "Find Random Tweets" button a random tweet from
            one of the five famous humans below will be called from Twitter.
            These tweets will be so gosh darn random you'll be like "Whoa."
            <div id='dropDownNumbers'>
              <br />
              1. H.H. Dalai Lama
              <br />
              2. Elon Musk
              <br />
              3. Peter Theil
              <br />
              4. Jack Dorsey
              <br />
              5. Nat Friedman
            </div>
          </div>
        </div>

        <br />
        <button
          className='btn3 btn-elegant btn-rounded btn-sm my-0'
          type='button'
          onClick={getRandomTweets}
        >
          Find Random Tweets
        </button>
        <br />
        <div className='randomTweetWrapper'></div>
        {randomUser.length !== 0 ? renderRandomTweet(randomUser) : null}
      </div>
    </PerfectScrollbar>
  );
};

export default Random;
