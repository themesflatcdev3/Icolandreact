import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Team2.propTypes = {
    item: PropTypes.object,
};

function Team2(props) {
    const {item} = props;

    return (
            <div className="team-box-6">
                <div className="team-box__image">
                <Link to="#"><img src={item.img} alt="ICOLand" /></Link>
                </div>
                <div className="team-box__content">
                    <Link to="#"><span className="icon-twitter"></span></Link>
                    <Link to="#" className='h5 title'>{item.title}</Link>
                    
                </div>
            </div>
    );
}

export default Team2;