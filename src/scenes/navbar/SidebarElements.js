import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { RoleAwareComponent } from 'react-router-role-authorization';
import Accessibility from 'material-ui/svg-icons/action/accessibility'; //patients
import IconButton from 'material-ui/IconButton';
import Assessment from 'material-ui/svg-icons/action/assessment'; //variables
import Remove from 'material-ui/svg-icons/content/remove'; //variables
import Dashboard from 'material-ui/svg-icons/action/dashboard'; //category
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';
import RIGHTS from 'services/authorizationRights';

let showText = false;

/*<Link to={'/patients'}>
    <li>
        <Accessibility style={iconStyles} />
        <span className="glyphicon-class">Patients</span>
    </li>
</Link>
<Link to={'/categories'}>
    <li>
        <Dashboard style={iconStyles} />
        <span className="glyphicon-class">Categories</span>
    </li>
</Link>
<Link to={'/variables'}>
    <li>
        <Assessment style={iconStyles} />
        <span className="glyphicon-class">Variables</span>
    </li>
</Link>

<Link to={'/rollodex'}>
    <li>
        <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
        <span className="glyphicon-class">Rollodex</span>
    </li>
</Link>
<Link to={'/workflows'}>
    <li>
        <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
        <span className="glyphicon-class">Workflows</span>
    </li>
</Link>
<Link to={'/questionnaires'}>
    <li>
        <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
        <span className="glyphicon-class">Questionnaires</span>
    </li>
</Link>
<Link to={'/basic_settings'}>
    <li>
        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        <span className="glyphicon-class">Basic Settings</span>
    </li>
</Link>

 */
class SidebarElements extends RoleAwareComponent {

    constructor(props, context) {
        super(props, context);
        const { user } = this.props;
        this.allowedRoles = RIGHTS.SUPERUSER_RIGHTS;
        this.userRoles = user && user.userRole ? [user.userRole] : [];
    }

    hasRole(roleName)  {
        const userRole =  (this.props.user && this.props.user.userRole) || '';
        return userRole===roleName;
    }
    showControlPanelSettingsView() {
        if (this.props.showSettings === true)
            return (
                <div>
                    <br />
                    <li className="dead">
                        <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                        {/*<span className="glyphicon-class">Categories</span>*/}
                    </li>
                    {/*<Link to={'/controlpanel/currentuser'}>
                        <li className="item" data-toggle="tooltip" title="Current Current User">
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </li>
                    </Link>*/}
                    <Link to={'/controlpanel/variables'}>
                        <li className="item" data-toggle="tooltip" title="Control Variables">
                            <span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
                            {/*<span className="glyphicon-class">Variables</span>*/}
                        </li>
                    </Link>
                    <Link to={'/controlpanel/categories'}>
                        <li className="item" data-toggle="tooltip" title="Control Categories">
                            <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
                            {/*<span className="glyphicon-class">Categories</span>*/}
                        </li>
                    </Link>
                    {this.rolesMatched() ? (
                            <Link to={'/controlpanel/users'}>
                                <li className="item" data-toggle="tooltip" title="Control Users">
                                    <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                </li>
                            </Link>
                        ) : null}
                    {this.hasRole('ROLE_LYTICSADMIN') ? (
                            <Link to={'/controlpanel/admin'}>
                                <li className="item" data-toggle="tooltip" title="Control Admin">
                                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                                </li>
                            </Link>
                        ) : null}
                </div>
            )
    };

    render() {
        return (
            <div className="theme-navbar bs-glyphicons">
                <ul className="bs-glyphicons-list ">
                    <Link to={'/patient/view/last'}>
                        <li className="item" data-toggle="tooltip" title="Patient Details">
                            {/*<IconButton tooltip="Patient View" iconStyle={iconStyles} >
                             <Accessibility />
                             </IconButton>*/}
                            <span className="glyphicon glyphicon-stats" aria-hidden="true"></span>
                            {/*<span className="glyphicon-class">Patients</span>*/}
                        </li>
                    </Link>
                    <Link to={'/patients'}>
                        <li className="item" data-toggle="tooltip" title="Patients List">
                            <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
                            {/*<span className="glyphicon-class">Categories</span>*/}
                        </li>
                    </Link>
                    <Link to={'/categories'}>
                        <li className="item" data-toggle="tooltip" title="Patient Categories">
                            <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
                            {/*<span className="glyphicon-class">Variables</span>*/}
                        </li>
                    </Link>
                    {this.showControlPanelSettingsView()}
                </ul>
            </div>
        );
    }
}
/*  <Link to="/patients" activeClassName="active">Patients</Link>
 {" | "}
 <Link to="/about" activeClassName="active">About</Link>*/

SidebarElements.propTypes = {
    user: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    showSettings: PropTypes.bool
    // xx: PropTypes.bool
};

export default SidebarElements;
