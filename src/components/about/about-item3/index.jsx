import React from 'react';
import PropTypes from 'prop-types';
About.propTypes = {
    item: PropTypes.object,
};

function About(props) {
    const {item} = props;

    return (
        <img src={item.img} alt="ICOLand" />
    );
}

export default About;