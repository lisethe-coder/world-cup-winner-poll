import React, { Component } from 'react';
import logo from './logo.svg';
import Team from './components/Team';
import './App.css';
import CroatiaLogo from './croatia.png';
import FranciaLogo from './france.png';
import Trophy from './world-cup-trophy.png';

class App extends Component {
  state = {
      croatiaVotes : 0,
      franceVotes : 0,
  };

  handleClick(team) {
    if (team == 'croatia') {
      this.setState(preState => ({
        croatiaVotes: preState.croatiaVotes + 1,
      }));
    }
    if (team == 'france') {
      this.setState(preState => ({
        franceVotes: preState.franceVotes + 1,
      }));
    }
  }
  render() {
    return (
      <div className="app">
        <h1> Russia 2018 World Cup Winner </h1>  
        <Team votes={this.state.croatiaVotes} logo={CroatiaLogo} onClick={() => this.handleClick('croatia')}/>
        <img className='trophy' src={Trophy}/>
         <Team votes={this.state.franceVotes} logo={FranciaLogo} onClick={() => this.handleClick('france')} />
      </div>
    );
  }
}

export default App;
