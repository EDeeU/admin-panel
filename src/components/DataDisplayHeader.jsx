import React, {Component} from 'react';

class DataDisplayHeader extends Component {
  constructor (props) {
    super(props);
    this.propertiesToShow = []
  }

  render () {

    this.propertiesToShow = [];

    for (var banana in this.props.show) {
      if (this.props.show[banana] === true) {
        this.propertiesToShow.push(
            <td key={banana} onClick={ this.props.handleSort.bind(this, banana)}>{banana}</td>
          );
      }
    }

    return (

        <tr>
          {this.propertiesToShow}
        </tr>
      );
  }

}

export default DataDisplayHeader;
