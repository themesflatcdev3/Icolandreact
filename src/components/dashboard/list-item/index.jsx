import React from 'react';
import PropTypes from 'prop-types';

Item.propTypes = {
    item: PropTypes.object,
};

function Item(props) {
    const {item} = props;

    return (
        <li>
            <div className="number"><h3>{item.number}</h3></div>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
        </li>
    );
}

export default Item;