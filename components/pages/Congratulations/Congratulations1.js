import React from 'react';
import * as Ons from 'react-onsenui';
import '../../../sass/components/congratulations.scss';


class Congratulations1 extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <Ons.Page key="congratulations1">
        <div className="page-wrapper congratulations-wrapper">
          <div className="congratulations-title">
            <h2>Congratulations!</h2>
            <p>00:14:88:39</p>
          </div>
          <img src="../../../assets/Graals.png" alt="Graals" className="trophy"/>
          <div className="btn blue">
            <span>Finish</span>
          </div>
        </div>
      </Ons.Page>
    );
  }
}

export default Congratulations1;
