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
                    <div className="features-box-4 center" data-aos="fade-up" data-aos-duration="800">
                        <div className="icon">
                            <span className={`${item.classAction}`}></span>
                        </div>
                        <div className="features-box-content">
                            <Link to="#" className="h5 title">{item.title}</Link>
                            <p className="fs-17">{item.desc}</p>
                            <Link to="#" className="action">{item.action}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4297 5.92999L20.4997 12L14.4297 18.07" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>              
    );
}

export default Feature;