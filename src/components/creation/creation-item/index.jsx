import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Creation.propTypes = {
    item: PropTypes.object,
};

function Creation(props) {
    const {item} = props;

    return (
        <div className="box-nft">
            <span className="icon-union-01"></span>
            <span className="icon-union-02"></span>
            <span className="icon-union-03"></span>
            <span className="icon-union-04"></span>
            <div className="box-nft__main">
                <Link to="#"><img src={item.img} alt="ICOLand" /></Link>
                <div className="content">
                    <Link to="#" className="h4 title">{item.title}</Link>
                </div>
             </div>
        </div>
    );
}

export default Creation;