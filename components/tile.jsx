import React from 'react';


class Tile extends React.Component {
  constructor (props) {
    super(props);
  }


  tileText(){
    let numBombs = this.props.tile.adjacentBombCount();
    if (this.props.tile.bombed && this.props.tile.explored) {
      return '\u2620';
    } else if (this.props.tile.explored && numBombs !== 0) {
      return numBombs;
    }
  }

  handleClick(e) {
    this.props.updateGame(this, e.altKey);
  }

  render () {
    let klass = "tile";
    if (this.props.tile.flagged) {
      klass += " flagged";
    } else if (this.props.tile.bombed && this.props.tile.explored) {
      klass += " bombed";
    } else if (this.props.tile.explored) {
      klass += " revealed";
    }

    return(
      <li key={this.props.tile.pos}
        onClick={this.handleClick.bind(this)}
        className={`${klass} group`}>
        {this.tileText()}
      </li>
    );
  }
}

export default Tile;
