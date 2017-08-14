import React, { PropTypes } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
 
 

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
                        <div className="navbar-header pull-right">
                            <div className="navbar-brand" href="#">
                                 <ButtonToolbar>
                                     <Button bsStyle="danger"  bsSize="xsmall"><i className="fa fa-plus-square" /> New</Button>
                                     <Button bsStyle="info"  bsSize="xsmall"><i className="fa fa-cog" /></Button>
                                      <Button bsStyle="info"  bsSize="xsmall"><i className="fa fa-align-justify" /> </Button>
                                 </ButtonToolbar>
                             </div>
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
