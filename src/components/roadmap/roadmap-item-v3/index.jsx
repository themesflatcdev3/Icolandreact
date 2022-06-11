import React from 'react';
import PropTypes from 'prop-types';

Parner.propTypes = {
    item: PropTypes.object,
};

function Parner(props) {
    const {item} = props;

    return (
        <div className="roadmap-box">
            <h2 className="time">{item.time}</h2>
            <h3 className="title">{item.title}</h3>
            <p className="fs-20">{item.desc}</p>
            <p className="fs-20">{item.desc2}</p>
        </div>
    );
}

export default Parner;