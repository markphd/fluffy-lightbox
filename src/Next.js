import React, { Component } from 'react';
import NextArrow from './Next.svg';

class Next extends Component {

  render() {
    return (
      <div className="next" onClick={this.props.clickNext}>
        <img src={ NextArrow } />
      </div>
    );
  }
}

export default Next