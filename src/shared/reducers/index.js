import { combineReducers } from 'redux';
import post from '../../reducers/postReducer';
import formsReducer from '../../reducers/formsReducer';

const rootReducer = combineReducers({
  post,
  ...formsReducer()
});

export default rootReducer;
