import React from 'react';
import { connect } from 'react-redux';
import * as Ons from 'react-onsenui';
import Login from './Login/Login';
import Register from './Register/Register';
import { setNavigator } from '../../redux/application/actions';
import { saveUserId } from '../../redux/user/actions';
import navigate from '../../routes/routeMapping';
import Stream from './Stream';
import FriendList from './FriendList';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.loadPage = this.loadPage.bind(this);
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId');
    this.props.setNavigator(this.navigator);
    if (userId) {
      this.props.saveUserId(userId);
      navigate(this.navigator, 'register', 'none');
    }
  }

  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }

  loadPage(page) {
    this.hide();
    this.navigator.resetPage({ component: page, props: { key: page } });
  }

  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.showMenu = this.show.bind(this);

    console.log(route, route.component)
    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Ons.Splitter>
        <Ons.SplitterSide
          side='right'
          collapse={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          onOpen={this.show.bind(this)}
        >
          <Ons.Page>
            <Ons.List>
              <Ons.ListItem key='login' onClick={this.loadPage.bind(this, Login)} tappable>Home</Ons.ListItem>
              <Ons.ListItem key='register' onClick={this.loadPage.bind(this, Register)} tappable>Home</Ons.ListItem>
              <Ons.ListItem key='stream' onClick={this.loadPage.bind(this, Stream)} tappable>Stream</Ons.ListItem>
              <Ons.ListItem key='friends' onClick={this.loadPage.bind(this, FriendList)} tappable>Friends</Ons.ListItem>
            </Ons.List>
          </Ons.Page>
        </Ons.SplitterSide>
        <Ons.SplitterContent>
          <Ons.Navigator
            animation="slide"
            initialRoute={{ component: Register, props: { key: 'register' } }}
            renderPage={this.renderPage.bind(this)}
            ref={(navigator) => {
              this.navigator = navigator;
            }}
          />
        </Ons.SplitterContent>
      </Ons.Splitter>

    );
  }
}

export default connect(null, { setNavigator, saveUserId })(MainPage);
