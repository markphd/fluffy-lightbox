import React, { Component } from 'react';
import Close from './Close.svg';
import Prev from './Prev.js';
import Next from './Next.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    this.state = {
      index: 0,
      isLoading: false
    };
    
    this.clickPrev = this.clickPrev.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.images = this.images.bind(this);
  }

  clickPrev() {
    this.setState({
      index: this.state.index > 0 ? this.state.index - 1 : 0,
      isLoading: this.state.isLoading ? false : true
    })
  }

  clickNext() {
    this.setState({
      index: this.state.index + 1,
      isLoading: this.state.isLoading ? false : true
    })
  }

  images(index) {
    const imgCollection = [
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

    return imgCollection[index];
  }

  captions(index) {
    const captionCollection = [
      {
        "title": "This is a title.",
        "description": "This is a straight \n description of the first image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the second image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the third image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the first image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the second image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the third image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the first image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the second image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the third image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the first image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the second image."
      },
      {
        "title": "This is a title.",
        "description": "This is a straight description of the third image. \nThis is another line. \nSo this is third line."
      }
    ]

    return captionCollection[index]
  }

  componentWillUpdate() {
    if (!this.state.isLoading) {
      this.setState({
      isLoading: true,
    })
    }
  }

  componentDidUpdate() {
    console.log("Component Did Mount!")
    if (this.state.isLoading) {
      this.setState({
      isLoading: false,
    })
    }
  }

  render() {
    return (
      <div className="lightbox">
        <section id="slider" className={this.state.transition}>
          <img src={this.images(this.state.index)} />
          <div className="caption">
            <h3>{this.captions(this.state.index).title}</h3>
            <div>{this.captions(this.state.index).description.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>
                  })}
            </div>
          </div>
        </section>
        <Prev clickPrev={this.clickPrev}/>
        <Next clickNext={this.clickNext}/>
      </div>
    );
  }
}

export default App;
