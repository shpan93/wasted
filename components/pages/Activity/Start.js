import React from 'react';
import * as Ons from 'react-onsenui';
import ActivityStartForm from './ActivityStartForm';

class Start extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <Ons.Page key="ac-start">
        <div className="activity-page page-wrapper wrapper align-height">
          <h1>Start activity</h1>
          <ActivityStartForm {...this.props} />
        </div>
      </Ons.Page>
    );
  }
}

export default Start;
