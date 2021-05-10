import React, { useState } from 'react';
import './index.css';
import './App.css';
import axios from 'axios';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchTweets = (e) => {
    e.preventDefault();
    console.log('searchTweets function done got run now.');

    axios.get(`/api/tweets/?search_term=${searchTerm}`).then((response) => {
      setSearchResults(response.data.statuses);
    });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log('searchResults tho: ', searchResults);

  const renderTweets = (tweets) => {
    return tweets.map((tweet) => {
      const date = new Date(tweet.created_at);

      const options = {
        hour: 'numeric',
        minute: 'numeric'
      };
      const newDateFormat = Intl.DateTimeFormat('en-US').format(date);
      const newTimeFormat = Intl.DateTimeFormat('en-US', options).format(date);

      return (
        <div className='card' key={tweet.id}>
          <div className='tweet'>
            <img
              className='profile-image'
              src={tweet.user.profile_image_url_https}
            />
          </div>
          <div className='tweet'>{tweet.text}</div>
          <div className='tweet'> {tweet.user.name}</div>
          <div className='tweet'> {tweet.user.screen_name}</div>
          <div className='tweet'> {tweet.text}</div>
          <div className='tweet'>
            Created at: {newDateFormat} - {newTimeFormat}
          </div>
        </div>
      );
    });
  };

  return (
    <PerfectScrollbar>
      <div className='container' style={{ marginBottom: '100px' }}>
        <br />
        <h3 className='card-title'>
          Welcome To The Search Page. <br />
          Enter your query below.{' '}
        </h3>
        <p>
          <button
            className='btn btn-primary'
            type='button'
            data-toggle='collapse'
            data-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
          >
            Questions?
          </button>
        </p>
        <div className='collapse' id='collapseExample'>
          <div className='card card-body'>
            Enter your search either by keyword or user name. This app will then
            search high and low throughout Twitter to bring you results from the
            last 7 days. Isn't that just swell?
          </div>
        </div>
        <form className='form-inline md-form mr-auto mb-4'>
          <br />
          <input
            className='form-control mr-sm-2'
            type='text'
            placeholder='Enter search query here... '
            onChange={handleInputChange}
          />
          <button
            className='btn2 btn-elegant btn-rounded btn-sm my-0'
            type='button'
            onClick={searchTweets}
          >
            Find Tweets
          </button>
        </form>
        <div> {renderTweets(searchResults)}</div>
      </div>
    </PerfectScrollbar>
  );
};
export default Search;
