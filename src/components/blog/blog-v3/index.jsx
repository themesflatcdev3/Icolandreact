import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Blogitem from '../blog-item3';
import Button2 from '../../button/button-st2';
import '../styles.scss'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            subtitle: 'Blog',
            title: 'The Lastes News',
            desc : 'Acurated directory of the best cryptocurrency resources. We’re slowly transforming the website into the best place for beginners to learn about cryptocurrencies. ',
        }
    )

    return (
        <section className="blog" id="blog">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-heading">
                            {dataTitle.subtitle}
                        </h6>
                        <h3 className="heading">
                            {dataTitle.title}
                        </h3>
                            <p className="fs-20">{dataTitle.desc}</p>
                    </div>
                </div>

                {
                    data.map(item => (
                        <Blogitem key={item.id} item={item}/>
                    ))
                }

                <div className="col-md-12">
                    <div className="button-more center">
                        <Button2 title='View more' addclass='style-3' path='#' />
                    </div>
                </div>

            </div>
        </div>
    </section>

    );
}

export default About;