import React from 'react';

class Input extends React.PureComponent {
  static propTypes = {};

  render() {

    return (
     <div className="form-group">
       <input
         placeholder={this.props.placeholder}
         type={this.props.type}
         onChange={this.props.onChange}
       />
     </div>
    );
  }
}

export default Input;
