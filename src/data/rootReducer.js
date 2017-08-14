
import {combineReducers} from 'redux';
import navbarStore from 'data/navbar/reducer';
import dashboardStore from 'data/dashboard/reducer';
 

//list all reducers for Redux (note needed when having more than one reducer, also
// it is good if they are mapped against what you have in initalState.js)
const rootReducer = combineReducers({
   navbarStore,
   dashboardStore,
});

export default rootReducer;
