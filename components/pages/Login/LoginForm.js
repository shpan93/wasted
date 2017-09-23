import React from 'react';
import { connect } from 'react-redux';
import Input from '../../form/Input';
import Register from '../Register/Register';
import { login } from '../../../redux/user/actions';

class LoginForm extends React.Component {
  static propTypes = {
    login: React.PropTypes.func,
    navigator: React.PropTypes.object,
  };
  state = {};

  handleChange(input, e) {
    this.setState({
      [input]: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  pushPage() {
    // register page navigation
    this.props.navigator.pushPage({ component: Register, props: { key: 'register' } });
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={::this.submit}>
          <Input value={this.state.username} placeholder="username" className="login-input"
                 onChange={this.handleChange.bind(this, 'username')} />
          <Input value={this.state.password} type="password" className="login-input" placeholder="name"
                 onChange={this.handleChange.bind(this, 'password')} />
          <button className="btn submit-button" type="submit">
            <span>Log in</span>
          </button>
        </form>

        <div onClick={::this.pushPage}>Sign up</div>
      </div>
    )
  }
}

export default connect(null, {
  login,
})(LoginForm);
