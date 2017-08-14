
import React, { PropTypes } from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const MenuList = ({props, onSelectCallback}) => {

    function onSelect (object, value) {
        onSelectCallback(value);
    }

    function getListItems () {
        return props.map((value, index, array) => {
            return <MenuItem key={value.id} value={value.id} primaryText={value.text} />
        });
    }
    return (
        <Menu onChange={onSelect}>
            {getListItems()}
        </Menu>
    )
}
MenuList.propTypes = {
    //props need to have id and text properties
    props: PropTypes.array.isRequired,
    onSelectCallback: PropTypes.func.isRequired
}

export default MenuList;
