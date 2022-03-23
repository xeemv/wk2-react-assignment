// d.	ReviewList – a container inside of a Movie that houses Review components.
import React from "react";
import Review from "./review";
import StarContain from "./star-contain";
import ReviewForm from "./reviewForm";
// import starButton from "./stars";


export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      content: props.content,
      count: 0,
    };
    this.onTrigger = this.onTrigger.bind(this);
  }
  onTrigger = (event) => {
    this.props.handleCallback(event.target.reviews.value);
    event.preventDefault();
  };

  render() {
    let allReviews = [];
    if (this.state.allReviews) {
      allReviews = this.state.allReviews.map((allReviews, index) => (
        <Review key={index} {...allReviews} />
      ));
    }

    return (
      <div>
        <div>
          <StarContain />
          <ReviewForm />
          <br />
          <div className="card-body">
            <button className="btn btn-outline-success" value="Submit">
              Submit
            </button>
            <br />
            <br />
            <h4>Movie reviews:</h4>
            <br />
            { allReviews } {this.state.content}
          </div>
          <br />
        </div>
      </div>
    );
  }
}







  //   onTrigger = (event) => { 
//     this.props.handleCallback(event.target.review.value); 
//     event.preventDefault(); 
// } 

//   render() {

//     return (
//       <div>
//         <div>
//           <Review onSubmit = {this.onTrigger} />
//           <br />
//           <button
//             className="btn btn-outline-success"
//             value="Submit"
//             // onClick={this.handleClick}
//           >
//             Submit
//           </button>
//           <br />
//         </div>
//       </div>
//     );
//   }
// }

// constructor(props){
//   super(props);
//   this.state = {
//       allReviews: props.allReviews
//   }
// }

// handleCallback = (reviewData) => { this.setState({allReviews: reviewData}) }

// render(){
  
//   //  let { allReviews } = this.state;
//    return (
//     <div className="card-header w-75 text-black" id="review-card">
//       {/* <div>{allReviews}</div> */}
//       <div className="card-body">
//       <ReviewForm />
//       </div>
//     </div>
//   )
// }
// }


  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   allReviews: props.allReviews
  //   // };
  // }

  // handleCallback = (reviewData) => {
  //   this.setState({ allReviews: reviewData });
  // };

  // render() {
  //   // let allReviews = this.state;

  //   return (
  //     <div>
  //       <div>
  //         {/* {allReviews} */}
  //         <Review
  //         // handleCallback={this.handleCallback}
  //         // {...{name: name, review: reviews}}
  //         />
  //       </div>
  //     </div>
  //   );
  // }



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

