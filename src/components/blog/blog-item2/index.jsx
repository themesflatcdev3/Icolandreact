import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Blog.propTypes = {
    item: PropTypes.object,
};

function Blog(props) {
    const {item} = props;

    return (
                <div className="col-xl-4 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                    <div className="blog-box">
                        <div className="box-image">
                            <Link to="blog-v1.html">
                                <img src={item.img} alt="ICOLand" />
                            </Link>
                        </div>
                        <div className="box-content">
                            <Link to="#" className="category">{item.category}</Link>
                            <Link to='/blogdetail' className="h5 title">{item.title}</Link>
                            <p className="text">{item.content}</p>
                            <div className="meta">
                                <div className="avt">
                                    <Link to="#"><img src={item.avt} alt="ICOLand" /></Link>
                                </div>
                                <div className="right">
                                    <Link to="#" className="h6 name">{item.name}</Link>
                                    <ul className="list">
                                        {
                                            item.list.map(text => (
                                                <li key={text.id}>
                                                    <Link to={text.link}>{text.text}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Blog;