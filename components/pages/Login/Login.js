import React from 'react';
import * as Ons from 'react-onsenui';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Register from '../Register/Register';
import { navigate } from '../../../redux/application/actions';

class LoginPage extends React.PureComponent {
  static propTypes = {};

  navigateToRegister(e) {
    e.preventDefault();
    this.props.navigator.resetPage({
    component: Register, props: { key: 'register' }
    });
  }

  render() {
    return (
      <Ons.Page key="login">
        <div className="page-wrapper wrapper align-height">
          <img src="../../../assets/wasted_ico.png" alt="Logo" className="logo" />
          <LoginForm {...this.props} />
          <div className="suggestion">
            <p>
              Don't have an account? <br />
              Please, <a className="link" href="#" onClick={::this.navigateToRegister}>Sign up</a>
            </p>
          </div>
        </div>
      </Ons.Page>
    );
  }
}

export default connect(null, { navigate })(LoginPage);
