import React from 'react';
import { connect } from 'react-redux';
import Input from '../../form/Input';
import { login } from '../../../redux/user/actions';

class LoginForm extends React.Component {
  static propTypes = {
    login: React.PropTypes.func,
  };
  state = {};

  handleChange(input, e) {
    this.setState({
      [input]: e.target.value,
    });
  }

  submit() {
    this.props.login(this.state);
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={::this.submit}>
          <Input value={this.state.email} placeholder="email" className="login-input" onChange={this.handleChange.bind(this, 'email')} />
          <Input value={this.state.password} type="password" className="login-input" placeholder="name"
                 onChange={this.handleChange.bind(this, 'password')} />
          <button className="btn submit-button" type="submit">
            <span>Log in</span>
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, {
  login,
})(LoginForm);
