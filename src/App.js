import React from 'react';
import './App.css';

class SoccerScoreboard extends React.Component {
  // Initialize state with default values for team names, logos, and goal counts
  state = {
    team1: {
      name: 'Equipo 1',
      logo: 'https://via.placeholder.com/100x100',
      goals: 0,
    },
    team2: {
      name: 'Equipo 2',
      logo: 'https://via.placeholder.com/100x100',
      goals: 0,
    },
  };

  // Function to add a goal to a team
  addGoal = (team) => {
    // Use the spread operator to create a new version of state with updated values
    this.setState({
      [team]: {
        ...this.state[team],
        goals: this.state[team].goals + 1,
      },
    });
  };

  // Function to reset the goal counts
  reset = () => {
    // Use the spread operator to create new versions of state with default values
    this.setState({
      team1: {
        ...this.state.team1,
        goals: 0,
      },
      team2: {
        ...this.state.team2,
        goals: 0,
      },
    });
  };

  render() {
    // Destructure values from state for easier access
    const { team1, team2 } = this.state;

    return (
      <div className="scoreboard">
        <div className="team">
          <div className="team-name">{team1.name}</div>
          <img className="logo" src={team1.logo} alt={`Logo de ${team1.name}`} />
          <div className="goal-count">{team1.goals}</div>
        </div>

        <div className="controls">
          <button className="add-goal" onClick={() => this.addGoal('team1')}>
            Añadir gol al equipo 1
          </button>
          <button className="add-goal" onClick={() => this.addGoal('team2')}>
            Añadir gol al equipo 2
          </button>
          <button className="reset" onClick={this.reset}>
            Reiniciar
          </button>
        </div>

        <div className="team">
          <div className="team-name">{team2.name}</div>
          <img className="logo" src={team2.logo} alt={`Logo de ${team2.name}`} />
          <div className="goal-count">{team2.goals}</div>
        </div>
      </div>
    );
  }
}

export default SoccerScoreboard;
