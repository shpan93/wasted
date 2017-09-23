/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import md5 from 'md5';
import * as Ons from 'react-onsenui';
import { addFriend, fetchFriends } from '../../redux/friends/actions';
import '../../sass/components/friendList.scss';

class FriendList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friendName: '',
    };
  }

  static propTypes = {
    friends: React.PropTypes.array,
    fetchFriends: React.PropTypes.func.isRequired,
    addFriend: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    friends: [],
  };

  onChange(e) {
    this.setState({ friendName: e.target.value });
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className="center">Splitter+Navigator</div>
        <div className="right">
          <Ons.ToolbarButton onClick={::this.props.showMenu}>
            <Ons.Icon icon="ion-navicon, material:md-menu" />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  componentWillMount() {
    this.props.fetchFriends();
  }

  addFriend() {
    this.props.addFriend(this.state.friendName);
  }

  render() {
    return (
      <Ons.Page renderToolbar={::this.renderToolbar} key="friendsList">
        <div className="friends-page">
          {
            this.props.friends && (
              <div className="friends-list">
                {
                  this.props.friends.map((friend, key) => {
                    const avatarUrl =
                      `https://www.gravatar.com/avatar/${md5(friend.username)}?d=retro`;
                    return (
                      <div className="friend-wrapper" key={key}>
                        <div
                          className="friend-avatar"
                          style={{ backgroundImage: `url(${avatarUrl})` }}
                        />
                        <div
                          className="friend-name"
                        >
                          {`${friend.firstName} ${friend.lastName}`}
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            )
          }
          <div className="add-friend-form">
            <form>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="friendName"
                  value={this.state.friendName}
                  onChange={::this.onChange}
                  placeholder="Friend username"
                />
              </div>
              <div className="btn btn-submit" onClick={::this.addFriend}>Add a friend</div>
            </form>
          </div>
        </div>
      </Ons.Page>
    );
  }
}

export default connect((state) => {
  return {
    friends: state.friends.friends,
  };
}, {
  addFriend,
  fetchFriends,
})(FriendList);
