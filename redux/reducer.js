import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import ApplicationReducer from './application/reducer';
import user from './user/reducer';
import friends from './friends/reducer';
import data from './data/reducer';

export default combineReducers({
  routing: routerReducer,
  application: ApplicationReducer,
  form: formReducer,
  user,
  friends,
  data,
});
