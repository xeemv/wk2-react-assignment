// c.	Stars – a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)

import React from "react";

export default class starButton extends React.Component {
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      this.props.action(this.props.name);
  }
 
  render(){
      return <button
          className="btn btn-primary"
          onClick={this.handleClick}>Click to add likes</button>;
  }
 
}