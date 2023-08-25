import { Component } from 'react';

export default class Filter extends Component {
  onChange = e => this.props.onCnangeFilter(e.target.value);
  onBlur = () => this.props.onCnangeFilter('');
  render() {
    return (
      <input
        type="text"
        name="filter"
        onChange={this.onChange}
        onBlur={this.onBlur}
        value={this.props.filter}
      />
    );
  }
}
