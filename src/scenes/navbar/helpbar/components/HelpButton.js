
import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const styles = {
    mediumIcon: {
        width: 48,
        height: 48,
        zindex: 1301,
    }
};



const HelpButton = ({ onClick, isOpen}) => {
    return <div className={"help-button" + (isOpen ? "-open" : "")} >
        <IconButton
            onClick={onClick}
            iconStyle={styles.mediumIcon}
            style={styles.mediumIcon}
        >
        {isOpen ?
            <ArrowRightIcon />
            :
            <ArrowLeftIcon />
        }
        </IconButton >
    </div >
}

HelpButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default HelpButton;

