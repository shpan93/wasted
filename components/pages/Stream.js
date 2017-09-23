/* eslint-disable no-undef, jsx-a11y/media-has-caption */
import React from 'react';
import { connect } from 'react-redux';
import * as Ons from 'react-onsenui';
import { startStream } from '../../redux/application/actions';
import '../../sass/components/stream.scss';

class Stream extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      videos: [],
    };
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

  startSharing() {
    this.initializeSkylink();
    this.props.startStream();
    this.setState({ isShown: true });
  }

  stopSharing() {
    window.skylink.leaveRoom();
    this.setState({ isShown: false, videos: [] });
  }

  initializeSkylink() {
    window.skylink = new Skylink();
    skylink.on('peerJoined', (peerId, peerInfo, isSelf) => {
      if (isSelf) return;
      const videosArray = this.state.videos.concat(peerId);
      this.setState({ videos: videosArray });
    });
    skylink.on('peerLeft', (peerId) => {
      const videosArray = this.state.videos.filter((el) => el !== peerId);
      this.setState({ videos: videosArray });
    });
    skylink.on('incomingStream', (peerId, stream, isSelf) => {
      if (isSelf) return;
      const vid = document.getElementById(peerId);
      attachMediaStream(vid, stream);
    });
    skylink.on('mediaAccessSuccess', (stream) => {
      const vid = document.getElementById('myVideo');
      attachMediaStream(vid, stream);
    });
    skylink.init({
      apiKey: 'b0fbc35c-abf1-4f0b-8809-1550ba4a9d5d',
      defaultRoom: 'Pick a room name',
    }, () => {
      skylink.joinRoom({
        audio: true,
        video: true,
      });
    });
  }

  render() {
    return (
      <Ons.Page renderToolbar={::this.renderToolbar} key="register">
        <div className="stream-page" ref={(c) => { this.page = c; }}>
          {
            this.state.isShown &&
            <div className="stream-wrapper" id="stream-wrapper" >
              <video id="myVideo" autoPlay className="own-video" />
              <div className="friends-video-container" ref={(c) => { this.component = c; }} >
                {this.state.videos.map((el, index) => {
                  return (
                    <div className="video-wrapper" key={index}>
                      <video autoPlay={true} id={el} className="friend-video" />
                    </div>
                  );
                })}
              </div>
            </div>
          }
          <button
            className={this.state.isShown ? 'stream-activator stop-stream' : 'stream-activator start-stream'}
            onClick={this.state.isShown ? ::this.stopSharing : ::this.startSharing}
          >
            {this.state.isShown ? 'Stop' : 'Start'}
          </button>
        </div>
      </Ons.Page>
    );
  }
}

export default connect(null, { startStream })(Stream);
