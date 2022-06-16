import React from 'react';
import PropTypes from 'prop-types';

Roadmap.propTypes = {
    item: PropTypes.object,
};

function Roadmap(props) {
    const {item} = props;

    return (
        <div className={`box-roadmap ${item.classAction}`} data-aos="fade-up" data-aos-duration="1000">
            <h3 className="title-box">{item.title}</h3>
            <div className="icon"><div className="dot"></div></div>
            <img src={item.img} alt="Icoland" />
                                        
            <div className="content">
                <h5 className="title">{item.title2}</h5>
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
        </div>
    );
}

export default Roadmap;