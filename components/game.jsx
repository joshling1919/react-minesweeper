import React from 'react';
import {Board as mineBoard, Tile as mineTile} from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor () {
    super();
    this.state = {board: new mineBoard(10, 20)};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.props.tile.toggleFlag();
    } else {
      tile.props.tile.explore();
    }

    this.setState({board: tile.props.tile.board});
  }


  render () {
    return(
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <h1>Minesweeper</h1>
      </div>
    );
  }
}

export default Game;
