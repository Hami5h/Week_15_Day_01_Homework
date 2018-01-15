import React from 'react';

class Film extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div classname="film">
        <h5>{this.props.title}</h5>
        <a href={this.props.url}>Showtimes</a>
      </div>
    );
  }


}

export default Film;
