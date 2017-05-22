import React, {Component} from 'react';

class DataDisplayItem extends Component {
  constructor (props) {
    super(props);
    this.propertiesToShow = [];
  }

//<a href={this.props.data.user_url} target="_blank">

  render () {
    this.propertiesToShow = [];
    for (var key in this.props.show) {
      if (this.props.show[key] === true) {
        if (key === 'user_schools' && this.props.data[key]) {
          this.propertiesToShow.push(
            <td key={key}>{this.props.data[key].displayname}</td>
          );
        } else if (key==='profile_image') {
          this.propertiesToShow.push(
            <td key={key}><a href={this.props.data.user_url} target="_blank"><img src={this.props.data[key]} alt={this.props.data.user_name} height="60" width="60" ></img></a></td>
          );
        } else if (key==="user_url") {
          this.propertiesToShow.push(
            <td key={key}><a href={this.props.data.user_url} target="_blank">{this.props.data[key]}</a></td>
          );
        } else if (key==="user_featured_items" && this.props.data[key]) {
          this.propertiesToShow.push(
            <td key={key}>{Object.keys(this.props.data[key]).length}</td>
          );
        } else if (key==="user_portfolio_items" && this.props.data[key]) {
          this.propertiesToShow.push(
            <td key={key}>{Object.keys(this.props.data[key]).length}</td>
          );
        } else if (key === "user_courses" && this.props.data[key]) {
          this.propertiesToShow.push(
            <td key={key}>{Object.keys(this.props.data[key]).length}</td>
          );
        } else if (key === "user_subjects" && this.props.data[key]) {
          this.propertiesToShow.push(
            <td key={key}>{Object.keys(this.props.data[key]).length}</td>
          );
        } else {
          this.propertiesToShow.push(
            <td key={key}>{this.props.data[key]}</td>
          );
        }
      }
    }

    return (
        <tr>
          {this.propertiesToShow}
        </tr>
      )
  }
}


export default DataDisplayItem;
