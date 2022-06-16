import React from 'react';
import PropTypes from 'prop-types';
Tokendetails.propTypes = {
    item: PropTypes.object,
};

function Tokendetails(props) {
    const {item} = props;

    return (
        <li>
            <h6 className="title">{item.title}</h6>
            <h2 className="number">{item.number}</h2>
        </li>
    );
}

export default Tokendetails;