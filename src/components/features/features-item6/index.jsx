import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
Feature.propTypes = {
    item: PropTypes.object,
};

function Feature(props) {
    const {item} = props;

    return (
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="800">
            <div className="features-box-7">
                <div className="box-image">
                    <img src={item.img} alt="ICOLand" />
                </div>
                <div className="box-content">
                    <Link to="#" className="h5 title">{item.title}</Link>
                    <p className="text fs-17">{item.desc}</p>
                </div>
            </div>
        </div>        
    );
}

export default Feature;