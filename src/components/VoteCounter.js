import React, { Component } from 'react';

class VoteCounter extends Component {
  render() {
    return (
      <div className="vote-box">
      	<img src={this.props.logo}/>
      	<div className="votes">{this.props.votes}</div>
      	<button 
      		className="vote-button" 
      		onClick={() => this.props.onClick()}> 
      		Vote 
      	</button>
      </div>
    );
  }
}

export default VoteCounter;
