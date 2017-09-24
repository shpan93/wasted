import React from 'react';
import { connect } from 'react-redux';
import Select from '../../form/Select';
import { login } from '../../../redux/user/actions';
import { getCategoriesAndActivities } from '../../../redux/application/actions';

class LoginForm extends React.Component {
  static propTypes = {
    login: React.PropTypes.func,
    navigator: React.PropTypes.object,
  };
  state = {
    form: {},
  };

  componentWillMount() {

  }

  handleChange(input, e) {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [input]: e.target.value,
      }
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={::this.submit}>
          <Select
            value={this.state.category}
            placeholder="Category"
            className="login-input"
            onChange={this.handleChange.bind(this, 'category')}
            options={this.state.dataCategories}
          />
          <Select
            value={this.state.activity}
            className="login-input"
            onChange={this.handleChange.bind(this, 'activity')}
            options={this.state.dataActivities}
          />
          <button className="btn submit-button" type="submit">
            <span>Start</span>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  login,
})(LoginForm);
