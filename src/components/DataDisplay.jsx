import React, { Component } from 'react';
import DataDisplayItem from './DataDisplayItem.jsx';
import DataDisplayHeader from './DataDisplayHeader.jsx';

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

    const dataItems = this.props.data.data.map((item) => {
      return <DataDisplayItem key={item.user_id || item.code} data={item} show={this.props.data.show} />
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
