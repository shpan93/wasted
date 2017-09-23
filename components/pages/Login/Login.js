import React from 'react';
import LoginForm from './LoginForm'

class LoginPage extends React.PureComponent {
  static propTypes = {};

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <LoginForm onSubmit={::this.handleSubmit}/>
    )
  }
}

export default LoginPage;