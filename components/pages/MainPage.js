import React from 'react';
import ons from 'onsenui';
import { Page, Button } from 'react-onsenui';

class MainPage extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};

  handleClick() {
    ons.notification.alert('Hello world!');
  }

  render() {
    if(!window){
      return null;
    }
    return (
      <div>
        <Page>
          <Button onClick={this.handleClick}>Tap me!</Button>
        </Page>
      </div>
    );
  }
}

export default MainPage;
