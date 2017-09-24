import React from 'react';
import { connect } from 'react-redux';
import Select from '../../form/Select';
import { startActivity } from '../../../redux/user/actions';
import { getCategoriesAndActivities, getTrackedActivities, finishActivities } from '../../../redux/data/actions';
import Congratulations1 from '../Congratulations/Congratulations1';
import Congratulations2 from '../Congratulations/Congratulations2';


class ActivityStartForm extends React.Component {
  static propTypes = {
    login: React.PropTypes.func,
    navigator: React.PropTypes.object,
  };
  state = {
    form: {},
    filteredActivities: [],
    timePast: null,
    interval: 0,
    currentlyActive: null,
  };

  componentWillMount() {
    this.props.getCategoriesAndActivities();
    this.props.getTrackedActivities(::this.getCurrentlyActive);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
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

  getCurrentlyActive(data) {
    const tracked = data.filter((el) => {
      return !el.endTIme;
    })[0];
    if (tracked) {
      const interval = setInterval(() => {
        let timeDiff = Math.abs(new Date().getTime() - new Date(tracked.startTime).getTime());
        timeDiff /= 1000;
        const hours = Math.ceil(timeDiff / 3600);
        const minutes = Math.ceil(((hours * 3600) - timeDiff) / 60);
        const seconds = Math.ceil((minutes * 60) - Math.ceil(((hours * 3600) - timeDiff)));
        this.setState({
          timePast: { hours, minutes, seconds },
        });
      }, 1000);
      this.setState({ interval });
      this.setState({ currentlyActive: tracked });
    } else {
      this.setState({ currentlyActive: null });
    }
  }

  submit(e) {
    e.preventDefault();
    this.props.startActivity(this.state.form.activity, ::this.componentWillMount);
  }

  navigateToSuccessPage() {
    const page = Math.random() > 0.5 ? Congratulations1 : Congratulations2;
    this.props.navigator.resetPage({ component: page, props: { key: page } });
  }

  finish() {
    this.props.finishActivities(this.state.currentlyActive, ::this.navigateToSuccessPage);
  }

  render() {
    if (this.props.data.isFetching || this.props.data.isFetchingCurrent) {
      return null;
    }
    if (this.state.currentlyActive) {
      return (
        <div className="active-activity">
          <div className="activity-name">
            {`Activity ${this.state.currentlyActive.activity.name} is in progress`}
          </div>
          {
            this.state.timePast && this.state.timePast.hours &&
            <div className="time-passed">
              {`${this.state.timePast.hours}:${this.state.timePast.minutes}:${this.state.timePast.seconds}`}
            </div>
          }
          <button className="btn submit-button" onClick={::this.finish}>
            <span>Finish</span>
          </button>
        </div>
      );
    }
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
  getTrackedActivities,
  finishActivities,
})(ActivityStartForm);
