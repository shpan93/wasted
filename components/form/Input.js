import React from 'react';
import {Input as OnsInput} from 'react-onsenui';

class Input extends React.PureComponent {
  static propTypes = {};

  render() {
    const {
      input,
      label,
      meta: { touched, error },
      ...custom
    } = this.props;

    return (
      <OnsInput
        modifier="underbar"
        float
        placeholder={label}
        {...input}
        {...custom}

      />
    );
  }
}

export default Input;
