import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
Feature.propTypes = {
    item: PropTypes.object,
};

function Feature(props) {
    const {item} = props;

    return (
        <div className="col-xl-3 col-md-6">
            <div className="features-box-3 center">
                <div className="icon">
                 <span className={`${item.classAction}`}></span>
                </div>
                <div className="features-box-content">
                    <Link to="#" className="h5 title">{item.title}</Link>
                    <p className="fs-17">{item.desc}</p>
                </div>
            </div>
        </div>                
    );
}

export default Feature;