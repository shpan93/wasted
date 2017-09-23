import React from 'react';
import LoginForm from './LoginForm'

class LoginPage extends React.PureComponent {
  static propTypes = {};

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (

     <div className="page-wrapper">
       <img src="../../../assets/wasted_ico.png" alt="Logo" className="logo"/>
      <LoginForm onSubmit={::this.handleSubmit}/>
      <div className="suggestion">
        <p>
          Don't have an account? <br/>
          Please, <a className="link" href="#">Sign up</a>
        </p>
      </div>
     </div>
    )
  }
}

export default LoginPage;
