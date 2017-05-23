import React, {Component} from 'react';
import OptionsSelector from './OptionsSelector.jsx';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="ControlPanel">
      <div className="OptionsSelectorHeader">Hide / Display</div>
        <OptionsSelector
          toggleOption = {this.props.toggleOption}
          options={this.props.options}
          />
      </div>
    );
  }

}

export default ControlPanel;
