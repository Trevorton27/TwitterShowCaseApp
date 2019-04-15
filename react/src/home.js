import React from 'react';
import './index.css';
import './App.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

class Home extends React.Component {
  render() {
    return (
      <PerfectScrollbar>
     <div className="container">
        <br/>
        <h2 className="card-title"> Welcome To My Twitter App. <br/></h2>
        <h3 className="card-title"> I hope you find it A-Ok.</h3>
        <br/>
       
          
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                What it is.
              </button>
             
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                This is a web app designed and built by yours truly, Trevor Mearns. It serves as an example of my knowledge and ability in working with Node.js, internal and external APIs, React and Heroku (not to mention HTML and CSS). If you'd like to know more about just what I've been up to, feel free to visit my personal website by clicking the button in the footer. There's all kinds of nifty stuff there including a blog where I write about various thoughts and experiences including software development.
              </div>
            </div>
          
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
              What it does.
              </button>
           
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
              This app will allow you to search for tweets on Twitter either by user name or keywords in the content of the tweet. If, for example, you're "way into" practicing deadlifts while wearing a gorilla costume, you could enter something like "gorilla costume deadlifts" into your search query and see what kind of relevant tweets Twitter has to offer. <br/> <br/>
               It also has a "random tweet finder" which will allow you to find random tweets from the following five famous humans.
               (I chose them all by myself.):
                 <div id="dropDownNumbers">
                  <br />1. H.H. Dalai Lama
                  <br />2. Elon Musk
                  <br />3. Peter Theil
                  <br />4. Jack Dorsey
                  <br />5. Nat Friedman
                  </div> 
                  <br/>
              To use this feature, you'll have to go to the "Random Tweet Finder" page and follow the directions. Have fun.
              </div>
            </div>
            <div className="container3">
            </div>
      </div>
      </PerfectScrollbar>
        ); 
  }
}
export default Home