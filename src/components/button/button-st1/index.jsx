import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles.scss';


Button.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
};

function Button(props) {
    const {title , path , onClick} = props;
    return (
        <Link className="btn-action" to={path} onClick={onClick}>                                   
            <span className="effect">{title}</span>
        </Link>
    );
}

export default Button;