import React from 'react';
import './index.css';
import './App.css';
import axios from 'axios';

class Random extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        username: '',
        searchResults: []
      }

     // this.getRandomTweets = this.getRandomTweets.bind(this);
    }

getRandomTweets() {
  console.log('getRandomTweets function was run from random.js');
  if (this.state.username !== '') {
    this.setState({
      username: '',
      searchResults: []
    });

    var getRequestOptions = {
      params: {
       username: this.state.username
      }
    };

    axios.get('/api/tweets/random', getRequestOptions).then((response) => {
      console.log(response.data);
      this.setState({
        searchResults: response.data
      });
    })
  }
}

handleInputChange = (event) => {
  this.setState({
    username: event.target.value
  })
}

renderRandomTweet = (tweets) => {

  tweets.length = 1
  console.log("renderRandomTweet function was run");

  return (tweets.map(tweet => {
    return (
      <div className="card">
        <div className="tweet">
       {tweet.user.profile_image_url_https}
        </div>
        <div className="tweet">
        {tweet.user.description}
        </div>
        <div className="tweet">
         Name {tweet.user.name}
        </div>
        <div className="tweet">
        Screen Name {tweet.user.screen_name}
        </div>
        <div className="tweet">
        {tweet.full_text}
        </div>
        <div className="tweet">
        Created {tweet.created_at}
        </div>
      </div>
    )
  }))
}
  render() {
    return (
    <div className="container">
      <br/>
      <h3 className="card-title">Welcome To The Random Tweet Finder.  </h3>
            <p>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              How does this work?
            </button>
            </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Upon clicking the "Find Random Tweets" button a random tweet from one of the five famous humans below will be called from Twitter. These tweets will be so gosh darn random you'll be like "Whoa."
              <div id="dropDownNumbers">
                  <br />1. H.H. Dalai Lama
                  <br />2. Elon Musk
                  <br />3. Peter Theil
                  <br />4. Jack Dorsey
                  <br />5. Nat Friedman
                  </div> 
              </div>
          </div>
        <form className="form-inline md-form mr-auto mb-4">
        <br/>
          <button className="btn3 btn-elegant btn-rounded btn-sm my-0" type="button" onClick={this.getRandomTweets}>Find Random Tweets</button>
        </form>
        {this.renderRandomTweets(this.state.searchResults)}
        </div>
        
    ); 
  }
}
export default Random