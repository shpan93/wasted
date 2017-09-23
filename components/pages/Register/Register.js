import React from 'react';
import * as Ons from 'react-onsenui';

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

  render() {
    return (
      <Ons.Page renderToolbar={::this.renderToolbar} key="register">
        <div>sdsdsdsdsd</div>
      </Ons.Page>
    )
  }
}

export default LoginPage;