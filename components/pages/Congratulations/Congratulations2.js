import React from 'react';
import * as Ons from 'react-onsenui';

class Congratulations2 extends React.PureComponent{
  static propTypes={};

  render(){
    return(
      <Ons.Page key='congratulations2'>
        <div className="page-wrapper congratulations-wrapper">
          <h3>You spent your time <br /> watching a movie,</h3>
          <img src="../../../assets/movie.png" alt="movie" className="actual-activity-img" />
          <h3>But also you could...</h3>
          <img src="../../../assets/site-dev.png" alt="site" className="suggested-activity-img"/>
          <h3>make your own site!</h3>
          <div className="btn blue">
            <span>Finish</span>
          </div>
        </div>
      </Ons.Page>
    );
  }
}

export default Congratulations2;
