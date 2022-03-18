// e.	Review – A text review a user can leave on a movie.

import React from "react";

export default class Review extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-success text-white">
          {/* Username and Time */}
          {this.props.username} {this.props.date}
        </div>
        <div className="card-body">
          {/* Comment Content */}
          {/* using props */}
          {this.props.content}
        </div>
        <div className="card-footer">
          {/* <LikeButton />
          <ReplyButton /> */}
        </div>
      </div>
    );
  }
}