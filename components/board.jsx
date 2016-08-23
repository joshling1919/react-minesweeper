import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor () {
    super();
  }

  render () {
    let grid = this.props.board.grid;
    let rows = [];
    // let updateGame = this.props.updateGame;
    grid.forEach((row, idx) => {
      let tiles = [];
      for (let i = 0; i < row.length; i++) {
        tiles.push(<Tile key={`${i}${idx}`} tile={row[i]} updateGame={this.props.updateGame}/>);
      }
      rows.push(<ul key={idx}>{tiles}</ul>);
    });



    return(
      <div id="board" className="group">
          {rows}
      </div>
    );
  }
}

export default Board;
