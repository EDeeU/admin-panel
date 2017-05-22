import React, { Component } from 'react';
import DataDisplayItem from './DataDisplayItem.jsx';
import DataDisplayHeader from './DataDisplayHeader.jsx';
import _ from 'lodash';

class DataDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: this.props.sort
    }
    this.handleSort = this.handleSort.bind(this);
    if (props.data.data) {
      this.dataItems = props.data.data.map((item) => {
        return <DataDisplayItem key={item.user_id || item.code} data={item} show={props.data.show} />
      })
    }
  }

  handleSort (e) {
    console.log('e.target', e);
    console.log('what the fuck is this at this point', this);
    this.setState({sort: e })
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.data.data) {
      if (this.state.sort !== nextState.sort)
        console.log('nextState is', nextState);
      this.dataItems = _.sortBy(nextProps.data.data, [nextState.sort]);
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
        <div className="DataDisplayTitle">Viewing Data For {this.props.selected} </div>
        <table>
          <tbody>
            <DataDisplayHeader show={this.props.data.show} handleSort={this.handleSort}/>
            {this.dataItems}
          </tbody>
        </table>
      </div>
      );
  }
}

export default DataDisplay;
