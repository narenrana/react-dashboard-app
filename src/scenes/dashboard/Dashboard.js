import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DashboardAPI from 'data/dashboard/api';
import {getColDef, getData} from './services/grid-data-service';
import {AgGridReact} from 'ag-grid-react';
import ActionPanel from './components/action-panel/ActionPanel';

class Dashboard extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
      this.props.loadDashboardData();
    }

    onGridReady=(params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }

    render() {
       
        return (
            <div className="dashboard-page" >
                <div className="panel panel-default">
                    <div className="panel-body">
                         <ActionPanel /> 
                        <div className="ag-gray" style={{ height: '800px'}}>
                            <AgGridReact
                                columnDefs={getColDef()}
                                rowData={getData(this.props.dashboard)}
                                onGridReady={this.onGridReady}
                                rowSelection="multiple"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Dashboard.propTypes = {
  loadDashboardData: PropTypes.func,
  dashboard: PropTypes.array
};

function mapStateToProps(state) {
    return {
     dashboard: state.dashboardStore.dashboard || {}
    };
}

function mapDispatchToProps(dispatch) {
    return {
      loadDashboardData: () => dispatch(DashboardAPI.loadDashboardData()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
