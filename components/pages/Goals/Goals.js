import React from 'react';
import * as Ons from 'react-onsenui';
import Select from '../../form/Select';
import Input from '../../form/Input';
import GoalsForm from './GoalsForm';
import '../../../sass/components/goals.scss';


class Goals extends React.PureComponent{
  static propTypes={};

  render() {
    return (
      <Ons.Page key="goals">
        <div className="page-wrapper goals-wrapper">
          <div className="goals-title">
            <h2>Goals</h2>
          </div>
          <GoalsForm {...this.props} />
          <div className="goals-guys">
            <img src="../../../assets/goal-guys2.png" className="goal-guy-left" alt="guy" />
            <img src="../../../assets/goal-guys1.png" className="goal-guy-right" alt="guy" />
          </div>
        </div>
      </Ons.Page>
    );
  }
}

export default Goals;
