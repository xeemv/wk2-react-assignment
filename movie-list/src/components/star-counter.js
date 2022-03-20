import React from "react";
import Stars from "./stars";

export default class StarCounter extends React.Component {
    constructor(props) {
        super(props);


        this.handleClick = this.handleClick.bind(this);
        // bind the 'this' keyword to the function or method
    }
    
    handleClick(){
        // this.setState(state => ({count: state.count + 1}));
        // this will define the functionality we want to happen in a function or a method
        this.props.action(this.props.name);
    }


    render(){
        return (
            <Stars
                onClick={this.handleClick}>
                {/* Counter {this.state.count} */}
                {/* {this.state.name} {this.state.count}  */}
                {/* took out line 49 and changed it from state to props, see line below */}
                {this.props.name} 
                {/* {this.props.count} */}
                </Stars> 
        );
    }


}