import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Blogitem from '../blog-item2';
import '../styles.scss'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Latest Blog Posts',
            desc : 'Read, watch and absorb the secrets that we publish is our official blog.',
        }
    )

    return (
        <section className="blog mobie-pb0" id="blog">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3 className="heading">
                            {dataTitle.title}
                        </h3>
                        <p className="fs-17">{dataTitle.desc}</p>
                    </div>
                </div>

        {
            data.map (item => (
               <Blogitem  key={item.id} item={item}/>
            ))
        }
            </div>
        </div>
    </section>

    );
}

export default About;