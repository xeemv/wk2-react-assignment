// f.	ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

import React from "react";
// import Rating from "./rating";
import Stars from "./stars";
import Review from "./review";
import MovieList from "./movieList-container";
import Movie from "./movie";
import Header from "./header";

export default class ReviewForm extends React.Component {
  constructor(props) {
    // same props that we added to our jsx
    super(props);
    // have the 1st line passed props to the super constructor
    // always need to call the super constructor and pass the props through it
    this.state = {
      // any properties we want to be available in the state of our post.js file
      reviews: props.reviews,
      content: props.content,
      // after this, comment out all of our props object w/in the render
      count: 0,
    };
  }

  render() {
    let reviews;
    if (this.state.reviews) {
      reviews = this.state.reviews.map((review, index) => (
        <Review key={index} {...review} />
      ));
    }

    return (
      <div className="card w-75">
        <div className="card-header bg-primary text-white">Review:</div>
        <div className="card-body">{this.state.content}</div>
        <div className="card-footer">
          <Stars />
        </div>
      </div>
    );
  }
}




















// export default class ReviewForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.setState = {
//         reviewData: {
//             name: "",
//             review: ""
//         }
//     }
// }

// onSubmitButtonClicked = () => {
//   const reviews = {
//       name: this.state.reviewData.name,
//       review: this.state.reviewData.review,
//   }
//   this.props.onSubmit(reviews)
// }

// handleNameInputChanged = (event) => {
//   this.setState( state => ({ reviewData: { ...state.reviewData, name: event.target.value } }) )
// }

// handleReviewInputChanged = (event) => {
//   this.setState( state => ({ reviewData: { ...state.reviewData, review: event.target.value } }) )
// }

//   render() {
//     // let reviews = []
//     // implement star ratings

//     return (
//       <div className="review-form">
//         <div className="mb-3">
//           <label for="exampleFormControlInput1" className="form-label">
//             Name:
//           </label>
//           <input
//             type="name"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="reviewerName"
//             value={this.state.reviewData.name} 
//             onChange={this.handleNameInputChanged}
//           />
//         </div>
//         <div className="mb-3">
//           <label for="exampleFormControlTextarea1" className="form-label">
//             Review:
//           </label>
//           <textarea
//             className="form-control"
//             id="exampleFormControlTextarea1"
//             rows="3"
//             value={this.state.reviewData.review} 
//             onChange={this.handleReviewInputChanged}
//           ></textarea>
//           <Stars />
//           <button className="btn btn-primary" type="submit" value="Submit" onClick={this.onSubmitButtonClicked}>Submit</button>
//         </div>
//       </div>
//     );
//   }
// }

// // https://codesource.io/fix-jsx-expressions-must-have-one-parent-element/
