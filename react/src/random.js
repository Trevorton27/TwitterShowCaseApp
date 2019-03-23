import React from 'react'
import './index.css';
import './App.css';

class Random extends React.Component {
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
                  <br />1.
                  <br />2.
                  <br />3.
                  <br />4.
                  <br />5.
                  </div> 
              </div>
          </div>
        <form className="form-inline md-form mr-auto mb-4">
        <br/>
          <input className="form-control mr-sm-2" type="text" placeholder=" "/>
          <button className="btn3 btn-elegant btn-rounded btn-sm my-0" type="submit">Find Random Tweets</button>
        </form>
      </div>
    ); 
  }
}
export default Random