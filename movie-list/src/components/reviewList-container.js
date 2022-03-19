// d.	ReviewList – a container inside of a Movie that houses Review components.
import React from "react";
import Review from "./review";
// import starButton from "./stars";


export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviews: props.totalReviews,
    };
  }

  handleCallReview = (allReview) => {
    this.setState({ totalReviews: allReview });
  };

  render() {
    let totalReviews = this.state;

    return (
      <div>
        <div>
          <Review handleCallReview={this.handleCallReview} />
        </div>
      </div>
    );
  }
}