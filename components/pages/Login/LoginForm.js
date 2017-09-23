import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../form/Input';

class LoginForm extends React.PureComponent {
  static propTypes = {};

  render() {

    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field name="Name" component={Input} />
          <Field name="Name" component={Input} />
        </form>
      </div>
    )
  }
}
export default reduxForm({
  form: 'login',
})(LoginForm);
