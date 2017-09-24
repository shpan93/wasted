import React from 'react';
import { connect } from 'react-redux';
import Select from '../../form/Select';
import { startActivity } from '../../../redux/user/actions';
import { getCategoriesAndActivities } from '../../../redux/data/actions';

class ActivityStartForm extends React.Component {
  static propTypes = {
    login: React.PropTypes.func,
    navigator: React.PropTypes.object,
  };
  state = {
    form: {},
    filteredActivities: [],
  };

  componentWillMount() {
    this.props.getCategoriesAndActivities();
  }

  handleChange(input, e) {
    let result = {
      ...this.state,
      form: {
        ...this.state.form,
        [input]: e.target.value,
      },
    };

    if (input === 'category') {
      const filteredActivities = this.props.data.activities.filter((activity) => activity.category.id === parseInt(e.target.value, 10));
      result = {
        ...result,
        filteredActivities,
      }
    }

    this.setState(result);
  }

  submit(e) {
    e.preventDefault();
    this.props.startActivity(this.state.form.activity);
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={::this.submit}>
          <Select
            value={this.state.category}
            placeholder="Choose category"
            onChange={this.handleChange.bind(this, 'category')}
            options={this.props.data.categories}
          />
          {this.state.form.category &&
          <Select
            value={this.state.activity}
            placeholder="Choose activity"
            onChange={this.handleChange.bind(this, 'activity')}
            options={this.state.filteredActivities}
          />
          }
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
  };
}, {
  getCategoriesAndActivities,
  startActivity,
})(ActivityStartForm);
