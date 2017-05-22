import React, {Component} from 'react';

class DataDisplayHeader extends Component {
  constructor (props) {
    super(props);
    this.propertiesToShow = []
  }

  render () {
    this.propertiesToShow = [];
    for (var key in this.props.show) {
      if (this.props.show[key] === true) {
        var convertToString = key;
        this.propertiesToShow.push(
            <td key={convertToString}>{convertToString}</td>
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
