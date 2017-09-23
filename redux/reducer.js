import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import ApplicationReducer from './application/reducer';
import user from './user/reducer';

export default combineReducers({
  routing: routerReducer,
  application: ApplicationReducer,
  form: formReducer,
  user,
});
