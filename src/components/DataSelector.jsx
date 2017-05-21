import React, {Component} from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import '../Dropdown.css';

class DataSelector extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Dropdown>
        <DropdownTrigger>select</DropdownTrigger>
        <DropdownContent>
          <ul>
            <li onClick={()=>this.props.onSelect('users')}>users</li>
            <li onClick={()=>this.props.onSelect('classes')}>classes</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }

}

export default DataSelector;
