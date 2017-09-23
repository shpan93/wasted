import React from 'react';
import { render } from 'react-dom';
import { browserHistory, match } from 'react-router';
import Root from './components/Root';
import configureStore from './redux/configureStore';
import getRoutes from './routes/routes';
import './sass/common.scss';
import './node_modules/onsenui/css/onsenui.css';
import './node_modules/onsenui/css/onsen-css-components.css';

const { store, history } = configureStore(browserHistory, window.App);
match({
  history,
  routes: getRoutes(store),
}, (error, redirectLocation, renderProps) => {
  render(
    <Root store={store} renderProps={renderProps} />
    , document.getElementById('app'));
});

