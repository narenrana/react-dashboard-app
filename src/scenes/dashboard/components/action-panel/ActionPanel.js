import React, { PropTypes } from 'react';
 
 

class ActionPanel extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
      
    }

    onGridReady=(params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }

    render() {
       
        return (
            <div className="action-panel" >
                <nav className="navbar navbar-default">
                 <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img alt="Brand" src="..."/>
                             </a>
                          </div>
                        </div>    
                </nav>
            </div>
        );
    }
}
ActionPanel.propTypes = {
  loadDashboardData: PropTypes.func,
  dashboard: PropTypes.array
};

 
export default  ActionPanel;
