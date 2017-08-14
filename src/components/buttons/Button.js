import React, { PropTypes } from 'react';
import { default as RaisedButton } from 'material-ui/RaisedButton';

const _style = {
    margin: 12
};

const Button = ({text, onClick, className = "", style = {}, isSecondary = false }) => {
    const b_props = {
            label: text,
            primary: !isSecondary,
            style: {..._style, ...style},
            secondary: isSecondary
    }

    return (
        <RaisedButton
            {...b_props}
            onClick={onClick}
            className={className}
        />
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Button;
