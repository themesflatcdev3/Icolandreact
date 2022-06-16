import React from 'react';
import PropTypes from 'prop-types';

Roadmap.propTypes = {
    item: PropTypes.object,
};

function Roadmap(props) {
    const {item} = props;

    return (
        <div className={`box-roadmap ${item.classAction}`} data-aos="fade-up" data-aos-duration="1000">
            <p className="time">{item.time}</p>
            <h5 className="title">{item.title}</h5>
            <ul className="list">
                {
                    item.list.map(text => (
                        <li key={text.id}>
                            <div className="dot"></div>
                            <p className='fs-17'>{text.text}</p>
                        </li>
                    ))
                } 
            </ul>
        </div>
    );
}

export default Roadmap;