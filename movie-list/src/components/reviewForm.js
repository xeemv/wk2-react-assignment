// f.	ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

import React from "react";
// import Rating from "./rating";
import Stars from "./stars";

export default class ReviewForm extends React.Component {




  render() {
    let reviews = []
    // implement star ratings




    return (
      <div className="review-form">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Reviewer's Name:
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="reviewerName"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Movie Review:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <Stars />
          <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </div>
      </div>
    );
  }
}

// https://codesource.io/fix-jsx-expressions-must-have-one-parent-element/