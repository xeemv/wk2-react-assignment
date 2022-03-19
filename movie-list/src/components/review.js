// e.	Review – A text review a user can leave on a movie.

import React from "react";
// import Rating from "./rating";
import Stars from "./stars";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        reviewData: {
            name: "",
            review: ""
        }
    }
}

onSubmitButtonClicked = () => {
  const reviews = {
      name: this.state.reviewData.name,
      review: this.state.reviewData.review,
  }
  this.props.onSubmit(reviews)
}

handleNameInputChanged = (event) => {
  this.setState( state => ({ reviewData: { ...state.reviewData, name: event.target.value } }) )
}

handleReviewInputChanged = (event) => {
  this.setState( state => ({ reviewData: { ...state.reviewData, review: event.target.value } }) )
}

  render() {
    // let reviews = []
    // implement star ratings

    return (
      <div className="review-form">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name:
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="reviewerName"
            value={this.state.reviewData.name} 
            onChange={this.handleNameInputChanged}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Review:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={this.state.reviewData.review} 
            onChange={this.handleReviewInputChanged}
          ></textarea>
          <Stars />
          <button className="btn btn-primary" type="submit" value="Submit" onClick={this.onSubmitButtonClicked}>Submit</button>
        </div>
      </div>
    );
  }
}

// https://codesource.io/fix-jsx-expressions-must-have-one-parent-element/



  // render() {
  //   return (
  //     <div className="card w-75">
  //       <div className="card-header bg-success text-white">
  //         {/* Username and Time */}
  //         {this.props.username} {this.props.date}
  //       </div>
  //       <div className="card-body">
  //         {/* Comment Content */}
  //         {/* using props */}
  //         {this.props.content}
  //       </div>
  //       <div className="card-footer">
  //         <Stars />
  //       </div>
  //     </div>
  //   );
  // }
