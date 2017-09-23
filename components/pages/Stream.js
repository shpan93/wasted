/* eslint-disable no-undef, jsx-a11y/media-has-caption */
import React from 'react';
import { connect } from 'react-redux';
import { startStream } from '../../redux/application/actions';
import '../../sass/components/stream.scss';

class Stream extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    };
  }

  startSharing() {
    this.initializeSkylink();
    this.props.startStream();
    this.setState({ isShown: true });
  }

  stopSharing() {
    this.setState({ isShown: false });
  }

  initializeSkylink() {
    const skylink = new Skylink();
    skylink.on('peerJoined', (peerId, peerInfo, isSelf) => {
      if (isSelf) return;
      const vid = document.createElement('video');
      vid.autoplay = true;
      vid.id = peerId;
      vid.className = 'friend-video';
      this.component.appendChild(vid);
    });
    skylink.on('peerLeft', (peerId) => {
      const vid = document.getElementById(peerId);
      this.component.removeChild(vid);
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
      <div className="stream-page">
        {
          this.state.isShown &&
          <div className="stream-wrapper" >
            <video id="myVideo" autoPlay className="own-video" />
            <div className="friends-video-container" ref={(c) => { this.component = c; }} />
          </div>
        }
        <button
          className={this.state.isShown ? 'stop-stream' : 'start-stream'}
          onClick={this.state.isShown ? this.stopSharing : this.startSharing}
        >
          {this.state.isShown ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default connect(null, { startStream })(Stream);
