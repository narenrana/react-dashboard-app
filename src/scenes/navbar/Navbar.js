import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
 
import FontIcon from 'material-ui/FontIcon';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

 
 
import { toggleVariables } from 'data/navbar/api';
import PowerSettingNew from 'material-ui/svg-icons/action/power-settings-new'; //patients
import Settings from 'material-ui/svg-icons/action/settings'; //patients
import PermIdentity from 'material-ui/svg-icons/action/perm-identity'; //patients
import IconButton from 'material-ui/IconButton';
import { toggleSettings } from 'data/navbar/api';
 
 

 
class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }
 

    
    render() {
 

        return (
            <header>
                <Toolbar className="theme-navbar">
                    <ToolbarGroup >
                        
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <IconButton iconStyle={{}} onClick={this.onCurrentUserEdit}>
                            <PermIdentity />
                        </IconButton>
                        <ToolbarTitle className="navbar-text-local" text={"Narender Rana"} />
    
                        <FontIcon className="muidocs-icon-custom-sort" />
                        <ToolbarSeparator />
                        <IconButton style={{color:'#fff !important'}} tooltip="Show/Hide settings" iconStyle={{}} onClick={this.props.toggleShowSettings}>
                            <Settings />
                        </IconButton>
                        <IconButton tooltip="Log Off" iconStyle={{}} onClick={this.props.logOut}>
                            <PowerSettingNew />
                        </IconButton>
                        
                    </ToolbarGroup>
                </Toolbar>
              
            </header>
        );
    }
}

Navbar.propTypes = {
 
};

function mapStateToProps() {
    return {
 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleShowSettings: () => dispatch(toggleSettings()),
        toggleVariables: (number) => dispatch(toggleVariables(number))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

