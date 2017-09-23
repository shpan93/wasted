import React from 'react';
import * as Ons from 'react-onsenui';
import LoginForm from './LoginForm';

class LoginPage extends React.PureComponent {
  static propTypes = {};

  handleSubmit(values) {
    console.log(values);
  }

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

  render() {
    return (
      <Ons.Page renderToolbar={::this.renderToolbar} key="login">
        <div className="page-wrapper">
          <img src="../../../assets/wasted_ico.png" alt="Logo" className="logo"/>
          <LoginForm onSubmit={::this.handleSubmit} {...this.props}/>
          <div className="suggestion">
            <p>
              Don't have an account? <br/>
              Please, <a className="link" href="#">Sign up</a>
            </p>
          </div>
        </div>
      </Ons.Page>
    );
  }
}

export default LoginPage;
