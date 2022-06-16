import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Blog.propTypes = {
    item: PropTypes.object,
};

function Blog(props) {
    const {item} = props;

    return (
        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="topics-box">
                <div className="box-content">
                    <Link to="blog-v2.html" className="h3 title">{item.title}</Link>
                    <p className="fs-17 text">{item.content}</p>

                    <Link to="blog-v2.html" className="readmore">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.8604 11.8601L41.0004 24.0001L28.8604 36.1401" stroke="#B4E116" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                        <path d="M7 24H40.66" stroke="#B4E116" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className="box-image">
                    <img src={item.img} alt="ICOLand" />
                </div>
            </div>
        </div>
    );
}

export default Blog;