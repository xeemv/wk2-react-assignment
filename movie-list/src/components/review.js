// e.	Review – A text review a user can leave on a movie.

import React from "react";
// import Rating from "./rating";
import Stars from "./stars";


export default class Review extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

 handleClick = () => {
  this.props.action(this.props.name);
 }


  render() {
    // let review = '';
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="form-control"
            type="text"
            name="review"
            placeholder="Leave your movie review here......"
          />
          <br />
          <button className="btn btn-primary" type="submit" value="Submit" onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}


