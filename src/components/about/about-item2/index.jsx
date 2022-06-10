import React from 'react';
import PropTypes from 'prop-types';
About.propTypes = {
    item: PropTypes.object,
};

function About(props) {
    const {item} = props;

    return (
        <div className="box-icon">
            <span className={`${item.classAction}`}></span>
            <p>{item.content}</p>
        </div>
    );
}

export default About;