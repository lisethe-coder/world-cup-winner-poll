import React, { Component } from 'react';
import VoteCounter from './VoteCounter';

class Team extends Component {
  render() {
    return (
      <div className="team">
      	<VoteCounter votes={this.props.votes} logo={this.props.logo} onClick={() => this.props.onClick()}/>
      </div>
    );
  }
}

export default Team;
