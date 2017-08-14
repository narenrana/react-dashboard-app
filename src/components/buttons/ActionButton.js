import React, { PropTypes } from 'react';
import FloatActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    // marginRight: 20,
}



const ActionButton = ({onClick, bottomRightFixed, disabled}) => {
    return <div className={bottomRightFixed ? "fixed-on-scroll-bottom" : ""} >
        <FloatActionButton onClick={onClick} style={style} disabled={disabled} >
            <ContentAdd />
        </FloatActionButton>
    </div >
}

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    bottomRightFixed: PropTypes.bool
}

export default ActionButton;
