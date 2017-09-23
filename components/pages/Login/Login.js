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
      <LoginForm onSubmit={::this.handleSubmit} {...this.props}/>
    </Ons.Page>
    )
  }
}

export default LoginPage;