import React from "react";
import Stars from '../components/stars';


export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: {},
      // highestCount: 0,
      highestCountStar: "",
    };

    // add a bind method
    this.countClicks = this.countClicks.bind(this);
  }

  countClicks(stars) {
    this.setState((state) => {
      state.counts[stars]
        ? (state.counts[stars] += 1)
        : (state.counts[stars] = 1);

      if (state.counts[stars] > state.highestCount) {
        state.highestCount = state.counts[stars];
        state.highestCountName = stars;
      }
      return state;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.highestCountStar}</h2>
        <Stars
          stars="One Star"
          count={this.state.counts.one}
          action={this.countClicks}
        />
        <Stars
          stars="Two Stars"
          count={this.state.counts.one}
          action={this.countClicks}
        />
        <Stars
          stars="Three Stars"
          count={this.state.counts.one}
          action={this.countClicks}
        />
        <Stars
          stars="Four Stars"
          count={this.state.counts.one}
          action={this.countClicks}
        />
        <Stars
          stars="Five Stars"
          count={this.state.counts.one}
          action={this.countClicks}
        />
      </div>
    );
  }
}
  