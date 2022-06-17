import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item4';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: ' What is ICO Crypto-Currencies?',
            desc : 'The world first platform to reward investors and traders build on ICO.'
        }
    )

    return (
        <section className="about style-4 mobie-pb0">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3 className="title">
                           {dataTitle.title}
                        </h3>
                        <p className="fs-17 mt-16">
                        {dataTitle.desc}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-duration="800">
            {
                data.slice(3,6).map(item => (
                    <AboutItem key={item.id} item={item} />
                ))           
            }                        
            </div>
        </div>
    </section>
    );
}

export default About;