import React, { Component } from 'react';
import DataDisplayItem from './DataDisplayItem.jsx';

//props is the "show" object of whichever is selected

class DataDisplay extends Component {
  constructor(props) {
    super(props);
    console.log('DataDisplay has', this.props.data);
  }

  render () {
    if (this.props.data === null) {
      return (
          <div> loading up the data! </div>
        )
    }
    const dataItems = this.props.data.map((user) => {
      return <DataDisplayItem key={user.user_id} data={user} />
    });
    return (
        <table>
          <tbody>
            <tr>
              <th>email</th>
              <th>id</th>
              <th>name</th>
              <th>url</th>
            </tr>
            {dataItems}
          </tbody>
        </table>
      );
  }
}

export default DataDisplay;
