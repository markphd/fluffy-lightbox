import React, { Component } from 'react';
import PrevArrow from './Prev.svg';

class Prev extends Component {

  render() {
    return (
      <div className="prev" onClick={this.props.clickPrev}>
        <img src={ PrevArrow } />
      </div>
    );
  }
}

export default Prev