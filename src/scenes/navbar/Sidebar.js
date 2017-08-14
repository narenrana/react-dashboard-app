import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import ReactSidebar from 'react-sidebar';
import Breadcrumbs from './components/Breadcrumbs.js';

class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.state = { sidebarOpen: true, sidebarDocked: true };
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    componentWillMount() {

        //matchMedia is not supported on IE8
        // if (window.matchMedia) {
        //     var mql = window.matchMedia(`(min-width: 800px)`);
        //     mql.addListener(this.mediaQueryChanged);
        //     this.setState({ mql: mql, sidebarDocked: mql.matches });
        // }
    }

    componentWillUnmount() {
        // this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: this.state.mql.matches });
    }

    render() {
        let sidebarContent = <b>Sidebar content</b>;

        return (
            <ReactSidebar
                sidebar={this.props.leftSide}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
                transition={false}
                touch={false}
                toucheHandleWidth={20}
                dragToggleDistance={30}
                pullRight={false}
                shadow={true}
                rootClassName="sidebar-root"
                sidebarClassName="sidebar-sidebar"
                contentClassName="sidebar-content"
            >
                <div>
                    <Breadcrumbs {...this.props.rightSide.props} />
                    <br />
                    {this.props.rightSide}
                </div>
                {this.props.children}
            </ReactSidebar>
        );
    }
}


Sidebar.propTypes = {
    loading: PropTypes.bool.isRequired,
    leftSide: PropTypes.node.isRequired,
    rightSide: PropTypes.node.isRequired
};

export default Sidebar;
