
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import HelpButton from './components/HelpButton';

export default class DrawerOpenRightExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <HelpButton
                    onClick={this.handleToggle}
                    isOpen={this.state.open}
                />
                <Drawer width={400} openSecondary={true} open={this.state.open} >
                    "Help is on the way..."
                </Drawer>
            </div>
        );
    }
}
