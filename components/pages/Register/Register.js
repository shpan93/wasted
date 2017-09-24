import React from 'react';
import * as Ons from 'react-onsenui';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import Login from '../Login/Login';
import { navigate } from '../../../redux/application/actions';

class Register extends React.PureComponent {
  static propTypes = {};

  navigateToLogin(e) {
    e.preventDefault();
    this.props.navigator.resetPage({
      component: Login, props: { key: 'login' }
    });
  }
  render() {
    return (
      <Ons.Page key="register" someProp="1">
        <div className="page-wrapper wrapper">
          <img src="/assets/wasted_ico.png" alt="Logo" className="logo" />
          <RegisterForm {...this.props} navigateToLogin={::this.navigateToLogin} />
          <div className="suggestion">
            <p>
              Already have an account? <br />
              Please, <a className="link" href="#" onClick={::this.navigateToLogin}>Sign in</a>
            </p>
          </div>
        </div>
      </Ons.Page>
    )
  }
}

export default connect(null, { navigate })(Register);
