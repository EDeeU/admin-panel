import React, {Component} from 'react';

class DataDisplayItem extends Component {
  constructor (props) {
    super(props);
    this.propertiesToShow = [];
  }

  render () {
    this.propertiesToShow = [];
    for (var key in this.props.show) {
      if (this.props.show[key] === true) {
        var convertToString = key;
        if (key === 'user_schools' && this.props.data[key] !== undefined) {
          this.propertiesToShow.push(
            <td key={key}>{this.props.data[key].displayname}</td>
          );
        } else if (key==='profile_image') {
          this.propertiesToShow.push(
            <td key={key}><img src={this.props.data[key]} alt={this.props.data.user_name} height="60" width="60" ></img></td>
          );
        }else {
          this.propertiesToShow.push(
            <td key={key}>{this.props.data[key]}</td>
          );
        }
      }
    }

    return (
        <tr>
          {this.propertiesToShow}
        </tr>
      )
  }
}


export default DataDisplayItem;
