import React from 'react';
import { connect } from 'react-redux';
import Input from '../../form/Input';
import Login from '../Login/Login';
import { register } from '../../../redux/user/actions';

class RegisterForm extends React.Component {
  static propTypes = {
    register: React.PropTypes.func,
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
    this.props.register(this.state).then(() => {
      this.props.navigateToLogin();
    });
  }


  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={::this.submit}>
          <Input
            value={this.state.email}
            placeholder="email"
            className="login-input"
            onChange={this.handleChange.bind(this, 'email')}
          />
          <Input
            value={this.state.username}
            placeholder="username"
            className="login-input"
            onChange={this.handleChange.bind(this, 'username')}
          />
          <Input
            value={this.state.firstName}
            placeholder="First name"
            className="login-input"
            onChange={this.handleChange.bind(this, 'firstName')}
          />
          <Input
            value={this.state.lastName}
            placeholder="Last name"
            className="login-input"
            onChange={this.handleChange.bind(this, 'lastName')}
          />
          <Input
            value={this.state.password}
            type="password"
            className="login-input"
            placeholder="password"
            onChange={this.handleChange.bind(this, 'password')}
          />
          <button className="btn submit-button" type="submit">
            <span>Join</span>
          </button>
        </form>
      </div>
    );
  }
}


export default connect(null, { register })(RegisterForm);
