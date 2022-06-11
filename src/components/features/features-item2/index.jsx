import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
Feature.propTypes = {
    item: PropTypes.object,
};

function Feature(props) {
    const {item} = props;

    return (
        <div className="features-box-6">
            <div className="icon">
            <span className={`${item.classAction}`}></span>
            </div>
            <div className="content">
                <Link to="#" className="h5 title">{item.title}</Link>
                <p className="fs-14">{item.desc1} </p>
                <p className="fs-14 mt-10">{item.desc2}</p>
            </div>
        </div>
    );
}

export default Feature;