import React, {Component} from 'react';

//just receives the show: {};
//as this.props.show


class DataDisplayHeader extends Component {
  constructor (props) {
    super(props);
    this.propertiesToShow = []
    for (var key in this.props.show) {
      if (this.props.show[key] === true) {
        var convertToString = key;
        this.propertiesToShow.push(
            <td key={convertToString}>{convertToString}</td>
          );
      }
    }
  }

  render () {
    return (
        <tr>
          {this.propertiesToShow}
        </tr>
      );
  }

}

export default DataDisplayHeader;
