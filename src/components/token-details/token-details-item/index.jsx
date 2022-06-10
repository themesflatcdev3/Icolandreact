import React from 'react';
import PropTypes from 'prop-types';
Tokendetails.propTypes = {
    item: PropTypes.object,
};

function Tokendetails(props) {
    const {item} = props;

    return (
        <li className={`${item.classAction}`}>
            <h5>{item.title}</h5>
            <p className="fs-17">{item.desc}</p>
        </li>
    );
}

export default Tokendetails;