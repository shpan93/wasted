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
import Achievements from '../../icons/achievements';
import Activities from '../../icons/activities';
import Exit from '../../icons/exit';
import Friends from '../../icons/friends';
import Profile from '../../icons/profile';
import Score from '../../icons/score';
import Start from '../../icons/start';
import ActivityStart from './Activity/Start';

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

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Ons.Splitter>
        <Ons.SplitterSide
          side="left"
          collapse={true}
          swipeable={true}
          isOpen={this.state.isOpen}
          onClose={::this.hide}
          onOpen={::this.show}
        >
          <Ons.Page className={`menu-page ${this.state.isOpen ? 'open' : 'closed'}`}>
            <img src="/assets/wasted_ico.png" alt="Logo" className="logo" />
            <Ons.List>
              <Ons.ListItem key='home' onClick={this.loadPage.bind(this, Login)} tappable>
                <div className="menu-list-item">
                  <Profile /> Home
                </div>
              </Ons.ListItem>
              <Ons.ListItem key='stream' onClick={this.loadPage.bind(this, Stream)} tappable>
                <div className="menu-list-item">
                  <Start /> Start
                </div>
              </Ons.ListItem>
              <Ons.ListItem key='friends' onClick={this.loadPage.bind(this, FriendList)} tappable>
                <div className="menu-list-item">
                  <Friends /> Friends
                </div>
              </Ons.ListItem>
              <Ons.ListItem key='activities' onClick={this.loadPage.bind(this, FriendList)} tappable>
                <div className="menu-list-item">
                  <Activities /> Activities
                </div>
              </Ons.ListItem>
              <Ons.ListItem key='score' onClick={this.loadPage.bind(this, FriendList)} tappable>
                <div className="menu-list-item">
                  <Score /> Score
                </div>
              </Ons.ListItem>
              <Ons.ListItem key='exit' onClick={this.loadPage.bind(this, FriendList)} tappable>
                <div className="menu-list-item">
                  <Exit /> Sign out
                </div>
              </Ons.ListItem>
              <Ons.ListItem key='achievements' onClick={this.loadPage.bind(this, FriendList)} tappable>
                <div className="menu-list-item">
                  <Achievements /> Achievements
                </div>
              </Ons.ListItem>
              <Ons.ListItem key='ActivityStart' onClick={this.loadPage.bind(this, ActivityStart)} tappable>
                <div className="menu-list-item">
                  <Achievements /> ActivityStart
                </div>
              </Ons.ListItem>
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
