import React from 'react';
import PropTypes from 'prop-types';
Team2.propTypes = {
    item: PropTypes.object,
};

function Team2(props) {
    const {item} = props;

    return (
        <li>
            <p className="fs-20">{item.text}</p>
            <h2 className="numb">{item.numb}</h2>
        </li>                                         
    );
}

export default Team2;