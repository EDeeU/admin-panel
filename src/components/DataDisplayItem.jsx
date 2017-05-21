import React, {Component} from 'react';

  // constructor (props) {
  //   super(props);
  //   this.propertiesToShow = []
  //   for (var key in this.props.show) {
  //     if (this.props.show[key] === true) {
  //       var convertToString = key;
  //       this.propertiesToShow.push(
  //           <td key={convertToString}>{convertToString}</td>
  //         );
  //     }
  //   }
  // }

class DataDisplayItem extends Component {
  constructor (props) {
    super(props);
    // console.log('datadisplayitem has', this.props.data)
    //this.props.data => 1 user object
    //this.props.options => configuration object
    this.propertiesToShow = [];
    for (var key in this.props.show) {
      if (this.props.show[key] === true) {
        var convertToString = key;
        this.propertiesToShow.push(
            <td key={key}>{this.props.data[key]}</td>
          );
      }
    }
  }

  render () {
    return (
        <tr>
          {this.propertiesToShow}
        </tr>
      )
  }
}


export default DataDisplayItem;
