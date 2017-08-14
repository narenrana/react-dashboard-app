    
import {actions} from './actions.js';
import SuperRest from 'data/SuperRest';

export function loadDashboardSuccess(response) {
    let dashboard = response.data;
    return {
        type: actions.LOAD_DASHBOARD_DATA_SUCCESS,
        dashboard
    };
}

export function fetchingDashboard() {
    return {
        type: actions.FETCHING_DASHBOARD_DATA,
    };
}

export default class DashboardAPI {
   
    static loadDashboardData() {
        const URL=`/contacts?organization_id=649199458`;
        return function (dispatch) {
            dispatch(fetchingDashboard());
            return SuperRest.get(URL, null, dispatch,
                loadDashboardSuccess, {showNoGenericLoading: true});
        }
    }

    }