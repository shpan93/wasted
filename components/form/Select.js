import React from 'react';

class Input extends React.PureComponent {
  static propTypes = {
    options: React.PropTypes.array,
  };

  renderOptions() {
    if (this.props.options) {
      return this.props.options.map((option) => {
        return (
          <option value={option.value}>{option.label}</option>
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
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

export default Input;
