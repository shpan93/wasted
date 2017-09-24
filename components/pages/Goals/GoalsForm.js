import React from 'react';
import { connect } from 'react-redux';
import Input from '../../form/Input';
import Select from '../../form/Select';
import { register } from '../../../redux/user/actions';


class GoalsForm extends React.Component{
  static propTypes = {
      // addGoal: React.PropTypes.func,
      // navigator: React.PropTypes.object,
    };
  state={};

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
        <form >
          <Select placeholder="Category" />
          <Input
            value={this.state.goal}
            placeholder="Goal title"
            className="goal-input"
            onChange={this.handleChange.bind(this, 'goal')}
          />
          <Input
            value={this.state.estimate}
            placeholder="Hours for the goal per day"
            className="goal-input"
            onChange={this.handleChange.bind(this, 'estimate')}
          />
          <button className="btn submit-button" type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { register })(GoalsForm);
