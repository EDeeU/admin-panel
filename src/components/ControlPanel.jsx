import React, {Component} from 'react';
import DataSelector from './DataSelector.jsx';
import OptionsSelector from './OptionsSelector.jsx';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <DataSelector onSelect={this.props.onSelect}/>
        <OptionsSelector toggleOption = {this.props.toggleOption} options={this.props.options}/>
      </div>
    );
  }

}

export default ControlPanel;
