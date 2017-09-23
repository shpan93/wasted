import React from 'react';
import * as Ons from 'react-onsenui';
import Login from './Login/Login'

const MyTab = React.createClass({
  render() {
    return (
      <Ons.Page>
          <Login/>
          <p>
            {this.props.content}.
          </p>
      </Ons.Page>
    );
  }
});

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  renderToolbar() {
    const titles = ['Home', 'Settings'];
    return (
      <Ons.Toolbar>
        <div className='center'>{titles[this.state.index]}</div>
      </Ons.Toolbar>
    );
  }

  renderTabs() {
    return [
      {
        content: <MyTab content="Welcome home" />,
        tab: <Ons.Tab label='Home' icon='md-home' />
      },
      {
        content: <MyTab content="Change the settings" />,
        tab: <Ons.Tab label='Settings' icon='md-settings' />
      }
    ];
  }

  render() {
    return (
      <Ons.Page renderToolbar={::this.renderToolbar}>
        <Ons.Tabbar
          swipeable={true}
          position='auto'
          index={this.state.index}
          onPreChange={(event) => {
            if (event.index != this.state.index) {
              this.setState({ index: event.index });
            }
          }
          }
          renderTabs={::this.renderTabs}
        />
      </Ons.Page>
    );
  }
}

export default MainPage;
