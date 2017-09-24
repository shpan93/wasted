import React from 'react';

class Input extends React.PureComponent {
  static propTypes = {
    options: React.PropTypes.array,
  };

  renderOptions() {
    if (this.props.options) {
      return this.props.options.map((option) => {
        return (
          <option value={option.id}>{option.name}</option>
        );
      });
    }

    return null;
  }

  render() {

    return (
      <div className="form-group">
        <select
          onChange={this.props.onChange}
        >
          <option disabled selected>{this.props.placeholder}</option>
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

export default Input;
