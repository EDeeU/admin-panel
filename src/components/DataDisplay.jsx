import React, { Component } from 'react';
import DataDisplayItem from './DataDisplayItem.jsx';
import DataDisplayHeader from './DataDisplayHeader.jsx';

//<DataDisplay data={this.state[this.state.selected]}/>
// users: {
//     data: null,
//     show: {
//       profile_image: true,
//       user_email: true,
//       user_id: true,
//       user_name: true,
//       user_schools: true,
//       user_url: true
//     }
// }
//DataDisplayHeader.jsx

class DataDisplay extends Component {
  constructor(props) {
    super(props);
    console.log('DataDisplay has', this.props.data);
  }

  render () {
    if (this.props.data.data === null) {
      return (
          <div> loading up the data! </div>
        )
    }

    const dataItems = this.props.data.data.map((user) => {
      return <DataDisplayItem key={user.user_id} data={user} show={this.props.data.show} />
    });

    return (
        <table>
          <tbody>
            <DataDisplayHeader show={this.props.data.show}/>
            {dataItems}
          </tbody>
        </table>
      );
  }
}

export default DataDisplay;
