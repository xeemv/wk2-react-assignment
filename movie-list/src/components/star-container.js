import React from "react";
// import Stars from "./stars";
import StarCounter from "./star-counter";


export default class StarContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counts: {},
            // counts will house each of the names w/ the counts associated to those names
            // will need to create count clicks method to use w/ this
            highestCount: 0,
            /** Events Part 3 - wk 2 react** 
            - how to make the name of the button w/ the most clicks to be displayed above all the buttons 
            - do this by adding more properties
            */
            highestCountName: ''
            // this will enable us to compare the name of the buttons w/ the highest count

        };

        // add a bind method
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name){
        // increment the state from line 10
        this.setState(state => {
        // anytime we click on 1, and set the state
        // this will find all buttons w/ that name
            state.counts[name]
            ? state.counts[name]+= 1
            // if it has already been click, then we will add one more to the count
            : state.counts[name] =1;
            // if it has not been clicked, we will set it to be set to 1
            // essentally we will initialize it w/ the 1st count

            if(state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        });
    }

    render(){
        return(
            <div>
                <h2>{this.state.highestCountName}</h2>
            <StarCounter 
            name="one" 
            count = {this.state.counts.one}
            action = {this.countClicks}
            />
            <StarCounter 
            name="two" 
            count = {this.state.counts.two}
            action = {this.countClicks}
            />
            <StarCounter 
            name="three" 
            count = {this.state.counts.three}
            action = {this.countClicks}
            />
            <StarCounter 
            name="four" 
            count = {this.state.counts.four}
            action = {this.countClicks}
            />
            <StarCounter 
            name="five" 
            count = {this.state.counts.five}
            action = {this.countClicks}
            />
            </div>
        );
    }
}