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
      <div>
        <form onSubmit={::this.submit}>
          <Input value={this.state.name} placeholder="name" onChange={this.handleChange.bind(this, 'name')} />
          <Input value={this.state.password} type="password" placeholder="name"
                 onChange={this.handleChange.bind(this, 'password')} />
          <button type="submit">
            Join
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, {
  login,
})(LoginForm);