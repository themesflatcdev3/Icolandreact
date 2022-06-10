import React from 'react';
import PropTypes from 'prop-types';
Feature.propTypes = {
    item: PropTypes.object,
};

function Feature(props) {
    const {item} = props;

    return (
        <div className="col-xl-3 col-md-6">
                    <div className="choose__box" data-aos="fade-up" data-aos-duration="800">
            <div className="choose__box-icon center">
                    <div className="icon">
                        <span className={`${item.classAction}`}></span>
                </div>
                <div className="content">
                    <h5 className="h5">{item.title}</h5>
                    <p className="mt-9">{item.content}</p>
                </div>
            </div>                     
        </div>
        </div>
    );
}

export default Feature;