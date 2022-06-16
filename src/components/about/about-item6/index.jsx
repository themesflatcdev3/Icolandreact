import React from 'react';
import PropTypes from 'prop-types';
About.propTypes = {
    item: PropTypes.object,
};

function About(props) {
    const {item} = props;

    return (
        <div className="col-md-4" data-aos="fade-up" data-aos-duration="800">
            <div className="about__box">
                <div className="number">
                    <h3>{item.number}</h3>
                </div>
                <h5 className="title">{item.title}</h5>
                <p className="text fs-17">{item.text}</p>
            </div>
        </div>
    );
}

export default About;