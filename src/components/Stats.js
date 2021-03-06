import React from 'react';
import { Consumer } from './Context'

const Stats = () => {
  return (
    <Consumer>
      { ({ players }) => {
        const totalPlayers = players.length;
        const totalPoints = players.reduce((total, player) => {
          return total + player.score;
        }, 0);

        return (
          <table className="stats">
            <caption>Stats</caption>
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Points:</td>
                <td>{totalPoints}</td>
              </tr>
            </tbody>
          </table>
        )
      }}
    </Consumer>
  )
}

export default Stats;
