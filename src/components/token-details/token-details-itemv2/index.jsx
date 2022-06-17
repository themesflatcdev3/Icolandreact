import React from 'react';
import PropTypes from 'prop-types';
Tokendetails.propTypes = {
    item: PropTypes.object,
};

function Tokendetails(props) {
    const {item} = props;

    return (
        <div className="col-xl-4 col-md-6">
            <div className={`token-details-box ${item.classAction}`}>
                <h5 className="title">{item.title}</h5>
                <p className="fs-17">{item.desc}</p>
            </div>
        </div>                 
    );
}

export default Tokendetails;