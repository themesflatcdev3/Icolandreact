import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Team2.propTypes = {
    item: PropTypes.object,
};

function Team2(props) {
    const {item} = props;

    return (
        <div className="team-box">
            <div className="team-box__image">
                <img src={item.img} alt="ICOLand" />
                <ul className="list-social">
                    {
                        item.listsocial.map(icon => (
                            <li key={icon.id}>
                                <Link to={icon.link}><i className={icon.icon}></i></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="team-box__content">
                <Link to="#" className="h5 name fs-24">{item.name}</Link>
                <p className="position fs-17">{item.position}</p>
            </div>
        </div>                                
    );
}

export default Team2;