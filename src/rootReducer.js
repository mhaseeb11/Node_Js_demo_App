import { combineReducers } from 'redux';
import members from './containers/Member/modules/reducer';

const rootReducer = combineReducers({
    members
});

export default rootReducer;