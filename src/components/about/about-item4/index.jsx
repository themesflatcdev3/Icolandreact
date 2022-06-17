import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
About.propTypes = {
    item: PropTypes.object,
};

function About(props) {
    const {item} = props;

    return (
        <div className="col-md-4">
            <div className="choose__box">
                <div className="choose__box-icon center">
                    <div className="icon">
                        <span className={`${item.classAction}`}></span>
                    </div>
                    <div className="content">
                        <Link to="#" className="h5">{item.title}</Link>
                        <p className="fs-17 mt-5">{item.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;