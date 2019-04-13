import React from 'react';
import './index.css';
import './App.css';
import axios from 'axios';

class Random extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        username: '',
        searchResults: {
            
        }
      }
      this.getRandomTweets = this.getRandomTweets.bind(this);
 
    }

getRandomTweets() {
  console.log('getRandomTweets function was run from random.js');
   {
    this.setState({
      searchResults: {
      
      }
    });



    axios.get('/api/tweets/random', ).then((response) => {
      console.log(response.data);
      this.setState({
        searchResults: response.data
      });
    });
  }
}


 renderRandomTweet = (tweet) => {

  console.log("renderRandomTweet function was run");

   if (Object.keys(tweet).length > 0) {
    return (
      <div className="card">
        <div className="tweet">
       <img className="profile-image" alt="profile picture" src={tweet.user.profile_image_url_https} />
        </div>
        <div className="tweet">
        {tweet.user.description}
        </div>
        <div className="tweet">
        Name: {tweet.user.name}
        </div>
        <div className="tweet">
        Screen Name: {tweet.user.screen_name}
        </div>
        <div className="tweet">
        {tweet.text}
        </div>
        <div className="tweet">
        Created: {tweet.created_at}
        </div>
      </div>
    );
   } 
  }
 


  render() {
    return (
    <div className="container">
      <br/>
      <h3 className="card-title">Welcome To The Random Tweet Finder.</h3>
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
       
            <br/>
              <button className="btn3 btn-elegant btn-rounded btn-sm my-0" type="button" onClick={this.getRandomTweets}>Find Random Tweets</button>
            <br />
        {this.renderRandomTweet(this.state.searchResults)}
        </div>   
    ); 
  }
}



export default Random