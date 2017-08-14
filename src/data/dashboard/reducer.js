
import {actions} from './actions';

let dashboardStore = {
    dashboard: {},
    isFetching: false
};

export default function dashboardReducer(state = dashboardStore, action = null) {
   switch (action.type) {
      case actions.LOAD_DASHBOARD_DATA_SUCCESS:
          {  return Object.assign({}, state, { dashboard: action.dashboard, isFetching: false}); }
       case actions.FETCHING_DASHBOARD_DATA:
          {  return Object.assign({}, state, { dashboard: action.dashboard, isFetching: true}); }
      default: return state;
   }
}
