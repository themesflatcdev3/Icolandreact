import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Blog.propTypes = {
    item: PropTypes.object,
};

function Blog(props) {
    const {item} = props;

    return (
        <div className="col-xl-3 col-md-6" >
            <div className="blog-box">
                <div className="box-image">
                    <Link to='#'>
                        <img src={item.img} alt="ICOLand" />
                    </Link>
                </div>
                <div className="box-content">
                    <Link to='#' className="h6 title">{item.title}</Link>
                    <p className="text">{item.content}</p>

                    <Link to='#' className="button">{item.button}</Link>
                </div>
            </div>
        </div>
    );
}

export default Blog;