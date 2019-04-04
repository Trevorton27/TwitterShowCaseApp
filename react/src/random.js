import React from 'react';
import './index.css';
import './App.css';
import axios from 'axios';

class Random extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        randomizeResult: [],
        searchResults: []
      }

      this.getRandomTweets = this.getRandomTweets(randomizeResult).bind(this);
    }

getRandomTweets() {
  console.log('getRandomTweets function was run from random.js');
  if (this.state.randomizeResult !== '') {
    this.setState({
      randomizeResult: [],
      searchResults: []
    });

    var getRequestOptions = {
      params: {
        randomizeResult: this.state.randomizeResult
      }
    };

    axios.get('/api/tweets', getRequestOptions).then((response) => {
      console.log(response.data);
      this.setState({
        searchResults: response.data
      });
    })
  }
}

handleInputChange = (event) => {
  this.setState({
    searchTerm: event.target.value
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
              Choose one of the five following famous humans, enter their name in the search field and the finest in random tweets will be displayed. These tweets will be so gosh darn random you'll be like "Whoa."
              <div id="dropDownNumbers">
                  <br />1. <a></a>H.H. Dalai Lama
                  <br />2. 
                  <br />3. 
                  <br />4.
                  <br />5.
                  </div> 
              </div>
          </div>
        <form className="form-inline md-form mr-auto mb-4">
        <br/>
          <input className="form-control mr-sm-2" type="text" placeholder=" " value={this.props.value} onChange={this.handleInputChange} />
          <button className="btn3 btn-elegant btn-rounded btn-sm my-0" type="button" onClick={this.searchTweets}>Find Random Tweets</button>
        </form>
        {this.renderRandomTweets(this.state.randomizeResult)}
      </div>
    ); 
  }
}
export default Random