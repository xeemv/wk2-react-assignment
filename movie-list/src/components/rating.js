import React from "react";
import Stars from "./stars";


export default class Rating extends React.Component {
  constructor(props){
    this.State ={
      counts: {},
      mostVoted: 0,
      value: props.value,
    };

    this.countClicks = this.countClicks.bind(this);
  }


  countClicks(value){
    this.setState( state => {
      state.counts[value] += 1;
      return this.state;
    });
  }

  render(){
    return(
      <div className="star-rating">
        <div>
          <h3>{this.state.mostVoted}</h3>
        <Stars
        value="one"
        mostVoted={this.state.counts.one}
        action = {this.countClicks}
        />
        </div>
      </div>
    )
  }

}























// import Stars from '../components/stars';


// export default class Rating extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="inlineRadioOptions"
//             id="inlineRadio1"
//             value="option1"
//           />
//           <label className="form-check-label" for="inlineRadio1">
//             1 Star
//           </label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="inlineRadioOptions"
//             id="inlineRadio2"
//             value="option2"
//           />
//           <label className="form-check-label" for="inlineRadio2">
//             2 Star
//           </label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="inlineRadioOptions"
//             id="inlineRadio2"
//             value="option2"
//           />
//           <label className="form-check-label" for="inlineRadio2">
//             3 Star
//           </label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="inlineRadioOptions"
//             id="inlineRadio2"
//             value="option2"
//           />
//           <label className="form-check-label" for="inlineRadio2">
//             4 Star
//           </label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="inlineRadioOptions"
//             id="inlineRadio2"
//             value="option2"
//           />
//           <label className="form-check-label" for="inlineRadio2">
//             5 Star
//           </label>
//         </div>
//       </div>
//     );
//   }
// }






  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       counts: {},
  //       highestCount: 0,
  //       highestCountStar: "",
  //     };

  //     // add a bind method
  //     this.countClicks = this.countClicks.bind(this);
  //   }

  //   countClicks(stars) {
  //     this.setState((state) => {
  //       state.counts[stars]
  //         ? (state.counts[stars] += 1)
  //         : (state.counts[stars] = 1);

  //       if (state.counts[stars] > state.highestCount) {
  //         state.highestCount = state.counts[stars];
  //         state.highestCountStar = stars;
  //       }
  //       return state;
  //     });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <h2>{this.state.highestCountStar}</h2>
  //         <Stars
  //           stars="One Star"
  //           count={this.state.counts.One}
  //           action={this.countClicks}
  //         />
  //         <Stars
  //           stars="Two Stars"
  //           count={this.state.counts.Two}
  //           action={this.countClicks}
  //         />
  //         <Stars
  //           stars="Three Stars"
  //           count={this.state.counts.Three}
  //           action={this.countClicks}
  //         />
  //         <Stars
  //           stars="Four Stars"
  //           count={this.state.counts.Four}
  //           action={this.countClicks}
  //         />
  //         <Stars
  //           stars="Five Stars"
  //           count={this.state.counts.Five}
  //           action={this.countClicks}
  //         />
  //       </div>
  //     );
  //   }
  // }
