import React from 'react';
import PropTypes from 'prop-types';

Item.propTypes = {
    item: PropTypes.object,
};

function Item(props) {
    const {item} = props;

    return (
        <div className="box-about">
            <div className="number">
                <h2>{item.number}</h2>
            </div>
            <h4 className="title">{item.title}</h4>
        </div>
    );
}

export default Item;