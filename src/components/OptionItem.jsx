import React, {Component} from 'react';

//this.props.toggleOption
//this.props.option
//this.props.value

class OptionItem extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div> {this.props.value} </div>
    );
  }
}

export default OptionItem;
