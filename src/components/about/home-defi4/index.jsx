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
        }
    )

    return (
        <section className="about style-4 style-8 bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h3 className="title">
                                {dataTitle.title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data.slice(9,15).map (item => (
                            <AboutItem key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default About;