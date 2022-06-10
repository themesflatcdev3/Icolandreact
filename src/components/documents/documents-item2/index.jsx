import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Documents.propTypes = {
    item: PropTypes.object,
};

function Documents(props) {
    const {item} = props;

    return (
        <div className="box-document">
        <div className="content">
            <h4 className="title">{item.title}</h4>
            <Link to="#" className="icon">
                <img src={item.img} alt="ICOLand" />
            </Link>
        </div>
    </div>
    );
}

export default Documents;