import React, { Component } from 'react';
import DataDisplayItem from './DataDisplayItem.jsx';
import DataDisplayHeader from './DataDisplayHeader.jsx';
import _ from 'lodash';

class DataDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'user_name'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.sort) {
      console.log('sort is called', this.dataItems);
      this.dataItems = _.sortBy(nextProps.data.data, [this.state.sort]);
      console.log('sorted to this', this.dataItems);
    }
    if (nextProps.data.data) {
      this.dataItems = this.dataItems.map((item) => {
        return <DataDisplayItem key={item.user_id || item.code} data={item} show={nextProps.data.show} />
      }); //dataItems is what has to be sorted
    }
  }

  render () {
    if (this.props.data.data === null) {
      return (
          <div> loading up the data! </div>
        )
    }

    return (
      <div className="DataDisplay">
        <div className="DataDisplayHeader">Viewing Data For {this.props.selected} </div>
        <table>
          <tbody>
            <DataDisplayHeader show={this.props.data.show}/>
            {this.dataItems}
          </tbody>
        </table>
      </div>
      );
  }
}

export default DataDisplay;
