import React from 'react';
import PropTypes from 'prop-types';

Parner.propTypes = {
    item: PropTypes.object,
};

function Parner(props) {
    const {item} = props;

    return (
        <img src={item.img} alt="ICOLand" />
    );
}

export default Parner;