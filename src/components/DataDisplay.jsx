import React, { Component } from 'react';

//props is the "show" object of whichever is selected

class DataDisplay extends Component {
  constructor(props) {
    super(props);
    console.log('DataDisplay has', this.props.data)
  }

  render () {
    if (this.props.data === null) {
      return (
          <div> loading up the data! </div>
        )
    }
    return (
        <div> making progress </div>
      );
  }
}

export default DataDisplay;
