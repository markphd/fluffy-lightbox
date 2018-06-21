import React, { Component } from 'react';
import Prev from './Prev.js';
import Next from './Next.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      index: 0,
      galleryPhotos: [
        'images/photo-0.jpg',
        'images/photo-1.jpg',
        'images/photo-2.jpg',
        'images/photo-3.jpg',
        'images/photo-4.jpg',
        'images/photo-5.jpg',
        'images/photo-6.jpg',
        'images/photo-7.jpg',
        'images/photo-8.jpg',
        'images/photo-9.jpg',
        'images/photo-10.jpg',
        'images/photo-11.jpg',
        'images/photo-12.jpg'
      ]
    };
    this.clickPrev = this.clickPrev.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }

  clickPrev() {
    this.setState({
      index: this.state.index > 0 ? this.state.index - 1 : 0,
    })
  }

  clickNext() {
    this.setState({
      index: this.state.index + 1,
    })
  }

  render() {
    return (
      <div className="lightbox">
        <section className="slider">
          <img src={this.state.galleryPhotos[this.state.index]} className="slide" />
          <div className="caption">{this.state.index}</div>
        </section>
        <Prev clickPrev={this.clickPrev}/>
        <Next clickNext={this.clickNext}/>
      </div>
    );
  }
}

export default App;
