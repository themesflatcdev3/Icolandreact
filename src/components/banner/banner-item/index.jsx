import React from 'react';
import PropTypes from 'prop-types';
Banner.propTypes = {
    item: PropTypes.object,
};

function Banner(props) {
    const {item} = props;

    return (
        <li>
            <span className={`${item.classAction}`}></span>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
        </li>
    );
}

export default Banner;