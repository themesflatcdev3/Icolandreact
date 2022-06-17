import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Blogitem from '../blog-item5';
import {Link} from 'react-router-dom';
import '../styles.scss'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Latest blog posts',
            subtitle : 'Read, watch and absorb the secrets that we publish is our official blog.',
            button: 'Read More',
        }
    )

    return (
        <section className="blog" id="blog">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="block-text">
                        <h3 className="heading">{dataTitle.title}</h3>
                        <p className="fs-17">{dataTitle.subtitle}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="button">
                        <Link to="#">{dataTitle.button}</Link>
                    </div>
                </div>

                {
                    data.map (item => (
                        <Blogitem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default About;