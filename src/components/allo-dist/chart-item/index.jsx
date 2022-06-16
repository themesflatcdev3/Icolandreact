import React from 'react';
import PropTypes from 'prop-types';
About.propTypes = {
    item: PropTypes.object,
};

function About(props) {
    const {item} = props;

    return (
        <div className="box">
            <div className="left">
                <div className="color"></div>
                <p className="name fs-20">{item.name}</p>
            </div>
            <h5 className="numb">{item.numb}</h5>
        </div>                                    
    );
}

export default About;