import React, { Component } from 'react';

class Caption extends Component {
	constructor(props) {
	  super(props);
	  // Don't call this.setState() here!
	  this.showDescription = this.showDescription.bind(this);
	  this.showTitle = this.showTitle.bind(this);
	}

	showTitle() {
		const { title } = this.props;
		if (title.length > 0) {
			return <h3>{title}</h3>
		}
	}

	showDescription() {
		const { description } = this.props;

		if (description.length > 0) {
			return (
				<div className="description">{description.split('\n').map((item, key) => {
				      return <span key={key}>{item}<br/></span>
				      })}
				</div>
			)	
		} else {
			return ''
		}
	}

  render() {
    return (
      <div className="caption">
      	{this.showTitle()}
      	{this.showDescription()}
      </div>
    );
  }
}

export default Caption