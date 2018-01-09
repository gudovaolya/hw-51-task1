import React, { Component } from 'react';


class Card extends React.Component {

  render() {
  	  return React.createElement('div', {className: 'card'},
      <img src={this.props.url} alt={`${this.props.title}'s picture`}  className="card-img" />,
      React.createElement('h3', null, this.props.title),
			React.createElement('p', null, `Год выпуска: ${this.props.year}`)
		);

  }
}

export default Card;
