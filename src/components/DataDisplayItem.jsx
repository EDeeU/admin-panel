import React, {Component} from 'react';

class DataDisplayItem extends Component {
  constructor (props) {
    super(props);
    console.log('datadisplayitem has', this.props.data)
  }

  render () {
    return (
        <tr>
          <td>{this.props.data.user_email}</td>
          <td>{this.props.data.user_id}</td>
          <td>{this.props.data.user_name}</td>
          <td>{this.props.data.user_url}</td>
        </tr>
      )
  }
}


export default DataDisplayItem;
