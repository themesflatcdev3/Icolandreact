import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
Gallery.propTypes = {
    item: PropTypes.object,
};

function Gallery(props) {
    const {item} = props;

    return (
        <div className="col-md-4">
            <div className="gallery__box">
                <img src={item.img} alt="ICOLand" />
                <div className="wrap-video">
                    <Link to="https://www.youtube.com/watch?v=i7EMACWuErA" className="popup-youtube">
                        <span className="icon-play"></span>
                    </Link>
                </div>
                <div className="content">
                    <h5 className="title">{item.title}</h5>
                        <p className="category">{item.category}</p>
                </div>                            
            </div>
        </div>                                                                                                     
    );
}

export default Gallery;