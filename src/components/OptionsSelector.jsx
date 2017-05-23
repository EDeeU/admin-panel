import React, {Component} from 'react';
import OptionItem from './OptionItem.jsx';
//this.props.toggleOption
//this.props.options

class OptionsSelector extends Component {
  constructor(props) {
    super(props);
    this.optionsToDisplay = [];

  }
  render () {

  const optionItems = [];
  for (var key in this.props.options) {
    if (this.props.options.hasOwnProperty(key)) {
      optionItems.push(
          <OptionItem toggleOption={this.props.toggleOption} selected={this.props.options[key]} key={key} value={key}/>
        );
    }
  }

    return (
      <div className="OptionsSelector" >
        {optionItems}
      </div>
    );
  }
}

export default OptionsSelector;
