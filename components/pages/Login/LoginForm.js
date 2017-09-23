import React from 'react';
import Input from '../../form/Input';

class LoginForm extends React.Component {
  static propTypes = {};
  state = {};

  handleChange(input, e) {
    this.setState({
      [input]: e.target.value,
    });
  }

  render() {

    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Input value={this.state.name} placeholder="name" onChange={this.handleChange.bind(this, 'name')} />
          <Input value={this.state.password} type="password" placeholder="name" onChange={this.handleChange.bind(this, 'password')} />
        </form>
      </div>
    )
  }
}

export default LoginForm;
