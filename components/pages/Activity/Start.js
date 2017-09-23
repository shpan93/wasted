import React from 'react';
import * as Ons from 'react-onsenui';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { navigate } from '../../../redux/application/actions';

class LoginPage extends React.PureComponent {
  static propTypes = {};

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Splitter+Navigator</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.props.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  navigateToRegister(e) {
    e.preventDefault();
    this.props.navigate('register');
  }

  render() {
    return (
      <Ons.Page renderToolbar={::this.renderToolbar} key="login">
        <div className="page-wrapper wrapper align-height">
          <h1>Start activity</h1>
          <ActivityStartForm {...this.props} />
          <Button>
            Start
          </Button>
        </div>
      </Ons.Page>
    );
  }
}

export default connect(null, { navigate })(LoginPage);
