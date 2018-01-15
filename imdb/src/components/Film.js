import React from 'react';

class Film extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div classname="film">
        <h5><img src="add.png"></img>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.title} &nbsp;&nbsp;&nbsp;&nbsp;<a href={this.props.url}>Showtimes</a></h5>

      </div>
    );
  }


}

export default Film;
