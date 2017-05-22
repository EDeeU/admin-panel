import React, {Component} from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class DataSelector extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
          <div className="DataSelector">
            <div className="DataOption" onClick={()=>this.props.onSelect('users')}>users</div>
            <div className="DataOption" onClick={()=>this.props.onSelect('classes')}>classes</div>
          </div>
    );
  }

}

export default DataSelector;
