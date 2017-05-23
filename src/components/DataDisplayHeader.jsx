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
        this.propertiesToShow.push(
            <td key={key} onClick={ this.props.handleSort.bind(this, key) }>{key}</td>
          );
      }
    }

    return (

        <tr className="TableHeaderText">
          {this.propertiesToShow}
        </tr>
      );
  }

}

export default DataDisplayHeader;
