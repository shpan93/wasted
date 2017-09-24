import React from 'react';
import { connect } from 'react-redux';
import Select from '../../form/Select';
import { login } from '../../../redux/user/actions';
import { getCategoriesAndActivities } from '../../../redux/data/actions';

class ActivityStartForm extends React.Component {
  static propTypes = {
    login: React.PropTypes.func,
    navigator: React.PropTypes.object,
  };
  state = {
    form: {},
  };

  componentWillMount() {
    this.props.getCategoriesAndActivities();
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
            onChange={this.handleChange.bind(this, 'category')}
            options={this.props.data.categories}
          />
          <Select
            value={this.state.activity}
            onChange={this.handleChange.bind(this, 'activity')}
            options={this.props.data.activities}
          />
          <button className="btn submit-button" type="submit">
            <span>Start</span>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => {
  return {
    data: state.data,
  }
}, {
  getCategoriesAndActivities,
})(ActivityStartForm);
