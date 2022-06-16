import React from 'react';
import PropTypes from 'prop-types';
Tokendetails.propTypes = {
    item: PropTypes.object,
};

function Tokendetails(props) {
    const {item} = props;

    return (
        <div className="info-box">
            <h5 className="title">{item.title}</h5>
            <p className="fs-17">{item.desc}</p>
        </div>                    
    );
}

export default Tokendetails;