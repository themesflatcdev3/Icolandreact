import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Blog.propTypes = {
    item: PropTypes.object,
};

function Blog(props) {
    const {item} = props;

    return (
        <div className="col-md-4">
            <div className="blog-box">
                <div className="box-image">
                    <Link to="blog-v3.html">
                        <img src={item.img} alt="ICOLand" />
                    </Link>
                </div>
                <div className="box-content">
                    <p className="meta">{item.meta}</p>
                    <Link to="blog-v3.html" className="h5 title">{item.title}</Link>
                    <p className="text">{item.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;