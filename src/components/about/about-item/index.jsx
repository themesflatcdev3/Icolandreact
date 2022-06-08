import React from 'react';
import PropTypes from 'prop-types';
About.propTypes = {
    item: PropTypes.object,
};

function About(props) {
    const {item} = props;

    return (
        <div className="icon-box">
            <div className="icon"><span className={`${item.classAction}`}></span></div>
            <div className="content">
                <h5>{item.title}</h5>
                <p className="fs-14">{item.content}</p>
            </div>
        </div>
    );
}

export default About;