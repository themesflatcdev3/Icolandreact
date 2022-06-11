import React from 'react';
import PropTypes from 'prop-types';

Banner.propTypes = {
    item: PropTypes.object,
};

function Banner(props) {
    const {item} = props;

    return (
        <img src={item.img} alt="ICOLand" />
    );
}

export default Banner;