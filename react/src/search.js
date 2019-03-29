import React from 'react';
import './index.css';
import './App.css';
import axios from 'axios';


class Search extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        searchTerm: '',
        searchResults: []
      }

      this.searchTweets = this.searchTweets.bind(this);
    }

searchTweets() {
  console.log('searchTweets function was run');
  if (this.state.searchTerm !== '') {
    this.setState({
      searchResults: []
    });

    var getRequestOptions = {
      params: {
        searchTerm: this.state.searchTerm
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

renderTweets = (tweets) => {
  tweets.length = 10

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
      <h3 className="card-title">Welcome To The Search Page. <br/>Enter your query below. </h3>
            <p>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Questions?
            </button>
            </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Enter your search either by keyword or user name. This app will then search high and low throughout Twitter to bring you results from the last 7 days. 
               Isn't that just swell?
            </div>
          </div>
        <form className="form-inline md-form mr-auto mb-4">
              <br/>
          <input className="form-control mr-sm-2" type="text" placeholder=" " value={this.props.value} onChange={this.handleInputChange} />
          <button className="btn2 btn-elegant btn-rounded btn-sm my-0" type="button" onClick={this.searchTweets}>Find Tweets</button>
        </form>
        {this.renderTweets(this.state.searchResults)}
      </div>
    );
  }
}





export default Search;